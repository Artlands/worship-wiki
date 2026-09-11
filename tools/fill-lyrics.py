#!/usr/bin/env python3
"""Fill the lyrics column of FICCC-songs.csv from the 歌詞連結 column.

Run this yourself, against sources your church is licensed to use. It never
invents lyrics: a row is only filled when its link returns text, and every
row is left untouched if anything goes wrong.

    python3 tools/fill-lyrics.py <file> --discover       # find missing links first
    python3 tools/fill-lyrics.py <file>                  # then fetch the lyrics
    python3 tools/fill-lyrics.py <file> --only 和散那     # one song
    python3 tools/fill-lyrics.py <file> --dry-run        # report, write nothing

--discover looks each title up in a hymn index you point it at and records the
page URL in column J. Point it at a site your church is licensed to use; it is
deliberately not hardcoded to any one source.
"""
import argparse, csv, html, re, sys, time, urllib.request

UA = "Mozilla/5.0 (worship-wiki lyric import)"
LYRICS, LINK = 4, 9


def fetch(url, timeout=20):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        raw = r.read()
    for enc in ("utf-8", "big5", "gb18030"):
        try:
            return raw.decode(enc)
        except UnicodeDecodeError:
            continue
    return raw.decode("utf-8", "replace")


def extract(page):
    """Pull the verse text out of a christianstudy.com hymn page."""
    body = re.sub(r"(?is)<(script|style|head).*?</\1>", " ", page)
    body = re.sub(r"(?i)<br\s*/?>", "\n", body)
    body = re.sub(r"(?i)</(p|div|tr|h\d)>", "\n\n", body)
    text = html.unescape(re.sub(r"<[^>]+>", "", body))
    lines = [re.sub(r"[ \t　]+", " ", ln).strip() for ln in text.splitlines()]

    keep, blanks = [], 0
    for ln in lines:
        if not ln:
            blanks += 1
            continue
        # verse lines are short and mostly CJK; navigation and credits are not
        cjk = len(re.findall(r"[一-鿿]", ln))
        if cjk < 4 or len(ln) > 40 or re.search(r"http|@|版權|Copyright|首頁|返回", ln):
            continue
        if keep and blanks:
            keep.append("")
        keep.append(ln)
        blanks = 0
    # collapse runs of blank lines, drop leading/trailing ones
    out = re.sub(r"\n{3,}", "\n\n", "\n".join(keep)).strip()
    return out


def discover(index_url, titles, timeout=25):
    """Map {title: page URL} by matching titles against a hymn index page."""
    page = fetch(index_url, timeout)
    base = re.match(r"(https?://[^/]+)", index_url).group(1)
    links = re.findall(r'<a[^>]+href="([^"]+)"[^>]*>(.*?)</a>', page, re.S | re.I)
    found = {}
    for href, label in links:
        label = html.unescape(re.sub(r"<[^>]+>", "", label)).strip()
        if not label:
            continue
        for title in titles:
            if title in found:
                continue
            # match on the Chinese half; English subtitles vary between sources
            zh = re.sub(r"[^一-鿿]", "", title)
            if len(zh) >= 3 and zh in re.sub(r"[^一-鿿]", "", label):
                found[title] = href if href.startswith("http") else base + "/" + href.lstrip("/")
    return found


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("csv_path")
    ap.add_argument("--only", default="", help="substring of the title to limit to")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--delay", type=float, default=1.0, help="seconds between requests")
    ap.add_argument("--discover", metavar="INDEX_URL", nargs="?", const="", default=None,
                    help="find missing links by matching titles against a hymn index page")
    args = ap.parse_args()

    rows = list(csv.reader(open(args.csv_path, encoding="utf-8")))
    header, body = rows[0], rows[1:]

    if args.discover is not None:
        if not args.discover:
            print("give --discover the URL of a hymn index page, e.g.\n"
                  "  python3 tools/fill-lyrics.py <file> --discover https://example.org/hymns/index.html",
                  file=sys.stderr)
            return
        missing = [r[1] for r in body if len(r) > LINK and not r[LINK].strip() and not r[LYRICS].strip()]
        print(f"looking up {len(missing)} titles with no link…")
        found = discover(args.discover, missing)
        for row in body:
            row += [""] * (LINK + 1 - len(row))
            if row[1] in found and not row[LINK].strip():
                row[LINK] = found[row[1]]
        print(f"matched {len(found)} of {len(missing)}")
        if args.dry_run:
            for t, u in list(found.items())[:10]:
                print(f"  {t} -> {u}")
            print("dry run: nothing written")
            return
        with open(args.csv_path, "w", encoding="utf-8", newline="") as fh:
            csv.writer(fh, lineterminator="\n").writerows([header] + body)
        print(f"wrote {args.csv_path}; now run again without --discover to fetch the lyrics")
        return

    filled = skipped = failed = 0
    for row in body:
        row += [""] * (LINK + 1 - len(row))
        title, link = row[1], row[LINK].strip()
        if args.only and args.only not in title:
            continue
        if row[LYRICS].strip() or not link:
            skipped += 1
            continue
        try:
            text = extract(fetch(link))
        except Exception as exc:                      # noqa: BLE001
            print(f"  !! {title}: {exc}", file=sys.stderr)
            failed += 1
            continue
        if len(text.splitlines()) < 2:
            print(f"  ?? {title}: nothing usable at {link}", file=sys.stderr)
            failed += 1
            continue
        row[LYRICS] = text
        filled += 1
        print(f"  ok {title}  ({len(text.splitlines())} lines)")
        time.sleep(args.delay)

    print(f"\nfilled {filled}, skipped {skipped}, failed {failed}")
    if args.dry_run:
        print("dry run: nothing written")
        return
    if filled:
        with open(args.csv_path, "w", encoding="utf-8", newline="") as fh:
            csv.writer(fh, lineterminator="\n").writerows([header] + body)
        print(f"wrote {args.csv_path}")


if __name__ == "__main__":
    main()
