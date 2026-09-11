# Worship Wiki

A pure front-end lyric slide builder for church worship teams. Build and search a song library, edit lyrics, paginate automatically, preview in real time, and export PowerPoint, Keynote-compatible files, and PDF.

## Features

- Automatic pagination every four lines, or manual page breaks with blank lines
- Six projection themes, 16:9 or 4:3, serif or sans, font size 20 to 120
- Credit line (title and author) placeable in any corner, centred, or hidden
- Per-device background images that never leave the browser
- One-click Simplified/Traditional conversion of lyrics, direction detected automatically
- Day and night interface modes, following the system setting on first visit
- Autosaves locally in the browser; anyone can edit their own copy offline
- Three interface languages: Simplified Chinese, Traditional Chinese, and English
- Google account sign-in; invited editors sync the shared library
- Cross-device song library sync via Google Sheets
- Exports fully editable `.pptx`, a Keynote-importable `.pptx`, and `.pdf`
- Responsive on desktop and mobile
- Includes a GitHub Pages deployment workflow

## Local preview

```bash
python3 -m http.server 4173 --directory dist
```

Open `http://127.0.0.1:4173/`.

## Deploy to GitHub Pages

1. Push the repository to GitHub, keeping `main` as the default branch.
2. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. In the same panel, tick **Enforce HTTPS**. Google Identity Services refuses to run on a plain `http://` origin, so sign-in silently fails without this.
4. On every push to `main`, `.github/workflows/pages.yml` publishes `dist/` automatically.

All pages use relative paths, so the site also works from a subpath such as `https://username.github.io/repository/`.

### Shipping config.js to the deployed site

`dist/config.js` is gitignored, which means the Actions runner checks out a tree without it and would publish a site stuck in local-draft mode. The workflow fills the gap: it writes `dist/config.js` on the runner from a repository variable named `WORSHIP_WIKI_CONFIG_JS`.

Set it once from your finished local file:

```bash
gh variable set WORSHIP_WIKI_CONFIG_JS < dist/config.js
```

Update the variable whenever the config changes, then re-run the workflow. If the variable is absent the deploy still succeeds, just in local-draft mode.

A repository **variable** is the right home for this, not a secret. Every value inside ends up in JavaScript served to all visitors, so masking it in Actions logs would protect nothing. The real protection is the OAuth origin restriction, the API key referrer restriction, and the spreadsheet's own sharing permissions.

## Connecting Google Sheets

Without Google configuration the site stays in its original local-draft mode. Once the steps below are complete, the shared library comes from the Sheet and only invited Google accounts can write back to it. Everyone else can still edit their own copy locally; those changes simply stay on their device.

### 1. Create the spreadsheet

Create a Google Sheet with two worksheets:

- `Songs`: import [`google-sheet-template/Songs.csv`](google-sheet-template/Songs.csv)
- `_config`: import [`google-sheet-template/_config.csv`](google-sheet-template/_config.csv)

To start with a library rather than an empty one, paste the rows from
[`google-sheet-template/Songs-seed.csv`](google-sheet-template/Songs-seed.csv) beneath the `Songs` header. It holds ten classic hymns in Mandarin, all from public-domain originals.

The column order in `Songs` must stay:

```text
id, title, author, tags, lyrics, theme, updated_at, updated_by, version
```

The `spreadsheetId` for your config is the segment of the Sheet's URL between `/d/` and `/edit`:

```text
https://docs.google.com/spreadsheets/d/1a2B3cD4eFgHiJkLmNoPqRsTuVwXyZ/edit#gid=0
                                       └──────── spreadsheetId ────────┘
```

### 2. Set sharing permissions

Set the spreadsheet's general access to **Anyone with the link → Viewer**. Signed-out visitors read the library anonymously through the API key, and those reads return 403 without link access.

Grant **Editor** individually, one Google address at a time. Never set general access to Editor.

In the sharing dialog's settings, uncheck **Editors can change permissions and share**, so editors cannot invite further editors on their own.

### 3. Set up Google Cloud

Everything below happens at [console.cloud.google.com](https://console.cloud.google.com).

**Enable the API.** Create a project, then go to **APIs & Services → Library**, find **Google Sheets API**, and click **Enable**.

**Configure the consent screen.** Open **Google Auth Platform** (older consoles call this *OAuth consent screen*). Choose **External**, then fill in an app name and your support email. Under **Data access**, add the scopes the app requests:

```text
openid
email
https://www.googleapis.com/auth/spreadsheets
```

Leave the app in **Testing**. Publishing to Production with the `spreadsheets` scope triggers Google's verification review, which this app does not need: it requests a fresh access token on every sign-in and stores no refresh token, so the 7-day expiry that normally makes Testing mode painful never applies.

**Create the OAuth client.** Go to **Credentials → Create credentials → OAuth client ID → Web application**. Under **Authorized JavaScript origins**, add every origin the site is served from:

```text
http://localhost:4173
http://127.0.0.1:4173
https://your-pages-domain
```

Leave **Authorized redirect URIs empty**. The app uses the Google Identity Services popup token flow, which never redirects. Copy the resulting `...apps.googleusercontent.com` string; that is your `googleClientId`.

**Create the API key.** Back on **Credentials**, choose **Create credentials → API key**, then open **Edit API key** and restrict it, or it will be usable by anyone who finds it:

- **Application restrictions → Websites**: `https://your-pages-domain/*` and `http://127.0.0.1:4173/*`
- **API restrictions → Restrict key**: **Google Sheets API** only

This key is only used for signed-out visitors, who read the Sheet anonymously. Signed-in users authenticate with their own OAuth token instead.

### 4. Fill in the site configuration

`dist/config.js` is gitignored so your credentials stay local. Copy the template and fill it in:

```bash
cp dist/config.example.js dist/config.js
```

```js
window.WORSHIP_WIKI_CONFIG = Object.freeze({
  googleClientId: "your OAuth Client ID",
  googleApiKey: "your API key",
  spreadsheetId: "the spreadsheet ID from the Google Sheet URL",
  adminEmail: "admin email that receives edit requests",
  songsRange: "Songs!A2:I",
  appendRange: "Songs!A:I",
  accessCheckRange: "_config!A1",
  accessCheckValue: "worship-wiki-access-check",
  syncIntervalMs: 30000
});
```

These values are public browser configuration. Never put an OAuth Client Secret, service account key, refresh token, or any private credential in this file.

To publish the same values to the deployed site, see [Shipping config.js to the deployed site](#shipping-configjs-to-the-deployed-site).

## Adding an editor

New editors must be added in **two** places. Someone listed in only one of them cannot edit.

1. **Google Sheet → Share**: add the address as **Editor**. This is what actually grants write access.
2. **Google Cloud → Google Auth Platform → Audience → Test users**: add the same address. While the app is in Testing mode, only listed accounts can complete sign-in at all; anyone else hits `Error 403: access_denied` at the popup and never reaches the permission check. The list holds up to 100 users.

Then have them sign in.

## Editing permission flow

1. Visitors can view, search, preview, export, and edit their own local copy. Their changes stay on that device and are never written to the Sheet.
2. After a user signs in with Google, the site checks their real write access to the Sheet by attempting a write to `_config!A1`.
3. Users without access can click "Request edit access" to send a pre-filled email to `adminEmail`.
4. The admin adds that address in both places described in [Adding an editor](#adding-an-editor).
5. After signing in again the user can edit, and changes sync to the Sheet automatically.

The read-only state on the page is only a UI hint; actual write permission is enforced by the Google Drive file ACL.

## Troubleshooting sign-in

| Symptom | Cause |
| --- | --- |
| Popup closes immediately, console names an origin | The site's origin is missing from **Authorized JavaScript origins**, or registered as `http://` while the site now serves `https://` |
| `Error 403: access_denied` | The account is not in **Test users** |
| Signs in, but changes never reach the Sheet | The account is not an **Editor** on the Sheet, so edits stay local |
| Signed-out visitors see an empty library | Sheet general access is not **Anyone with the link → Viewer**, or the API key's referrer restriction excludes the site |
| Live site behaves as local-draft | `WORSHIP_WIKI_CONFIG_JS` is unset, so the deploy shipped no `config.js` |

## Technical notes

The site needs no build step. PPTX and PDF are generated in the browser by PptxGenJS and jsPDF respectively; both libraries are fetched from the network on the first export.
