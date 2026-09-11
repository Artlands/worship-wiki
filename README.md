# Worship Wiki

A pure front-end lyric slide builder for church worship teams. Build and search a song library, edit lyrics, paginate automatically, preview in real time, and export PowerPoint, Keynote-compatible files, and PDF.

## Features

- Automatic pagination every four lines, or manual page breaks with blank lines
- Three 16:9 projection themes with adjustable font size
- Autosaves locally in the browser; lyrics are never uploaded
- Three interface languages: Simplified Chinese, Traditional Chinese, and English
- Google account sign-in with invite-only editing
- Cross-device song library sync via Google Sheets
- Exports `.pptx`, a Keynote-importable `.pptx`, and `.pdf`
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
3. On every push to `main`, `.github/workflows/pages.yml` publishes `dist/` automatically.

All pages use relative paths, so the site also works from a subpath such as `https://username.github.io/repository/`.

## Connecting Google Sheets

Without Google configuration the site stays in its original local-draft mode. Once the steps below are complete, ordinary visitors become read-only and only invited Google accounts can add or modify songs.

### 1. Create the spreadsheet

Create a Google Sheet with two worksheets:

- `Songs`: import [`google-sheet-template/Songs.csv`](google-sheet-template/Songs.csv)
- `_config`: import [`google-sheet-template/_config.csv`](google-sheet-template/_config.csv)

The column order in `Songs` must stay:

```text
id, title, author, tags, lyrics, theme, updated_at, updated_by, version
```

### 2. Set sharing permissions

If the lyrics may be viewed publicly, set the spreadsheet's general access to **Anyone with the link → Viewer**. Then grant **Editor** access individually, using each editor's Google email address.

In the sharing settings, turn off **Editors can change permissions and share** so that only admins can invite or remove editors. Do not set general access to Editor.

### 3. Set up Google Cloud

1. Create a Google Cloud project and enable the **Google Sheets API**.
2. Create an OAuth Client ID of type Web application.
3. Add the local preview address and the final GitHub Pages domain to Authorized JavaScript origins.
4. Create an API key, restrict it to the Google Sheets API, and add a website referrer restriction.

### 4. Fill in the site configuration

Edit [`dist/config.js`](dist/config.js):

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

## Editing permission flow

1. Visitors can view, search, preview, and export lyrics, but the editor is read-only.
2. After a user signs in with Google, the site checks their real write access to the Sheet.
3. Users without access can click "Request edit access" to send a pre-filled email to the admin.
4. The admin invites that email address as an Editor from the Google Sheet's sharing dialog.
5. After signing in again the user can edit, and changes sync to the Sheet automatically.

The read-only state on the page is only a UI hint; actual write permission is enforced by the Google Drive file ACL.

## Technical notes

The site needs no build step. PPTX and PDF are generated in the browser by PptxGenJS and jsPDF respectively; both libraries are fetched from the network on the first export.
