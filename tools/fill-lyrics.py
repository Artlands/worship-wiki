#!/usr/bin/env python3
"""Fill the lyrics column of FICCC-songs.csv from the 歌詞連結 column.

Run this yourself, against sources your church is licensed to use. It never
invents lyrics: a row is only filled when its link returns text, and every
row is left untouched if anything goes wrong.

    python3 tools/fill-lyrics.py google-sheet-template/FICCC-songs.csv
    python3 tools/fill-lyrics.py <file> --only 和散那     # one song
    python3 tools/fill-lyrics.py <file> --dry-run        # report, write nothing
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


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("csv_path")
    ap.add_argument("--only", default="", help="substring of the title to limit to")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--delay", type=float, default=1.0, help="seconds between requests")
    args = ap.parse_args()

    rows = list(csv.reader(open(args.csv_path, encoding="utf-8")))
    header, body = rows[0], rows[1:]

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
