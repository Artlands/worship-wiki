/*
 * Worship Wiki public configuration.
 * These values are shipped to every browser and must never contain client
 * secrets, service-account keys, refresh tokens, or other private credentials.
 */
window.WORSHIP_WIKI_CONFIG = Object.freeze({
  googleClientId: "YOUR_GOOGLE_OAUTH_CLIENT_ID",
  googleApiKey: "YOUR_GOOGLE_API_KEY",
  spreadsheetId: "YOUR_GOOGLE_SHEET_ID",
  adminEmail: "YOUR_ADMIN_EMAIL",
  songsRange: "Songs!A2:I",
  appendRange: "Songs!A:I",
  accessCheckRange: "_config!A1",
  accessCheckValue: "worship-wiki-access-check",
  syncIntervalMs: 30000
});
