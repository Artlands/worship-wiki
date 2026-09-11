const starterSongs = [
  {
    id: "heavens-praise",
    title: "诸天颂赞",
    author: "示例诗歌",
    tags: "赞美 · 创造",
    updatedAt: 5,
    lyrics: "诸天述说祢手中的荣美\n晨光宣告祢信实不改变\n万有同声，颂赞祢的圣名\n我的心也要永远歌唱\n\n荣耀归祢，慈爱的君王\n盼望归祢，黑夜的真光\n一生一世，我要寻求祢\n从今直到永远"
  },
  {
    id: "grace-like-river",
    title: "恩典如河",
    author: "示例诗歌",
    tags: "恩典 · 救赎",
    updatedAt: 4,
    lyrics: "恩典如河流进干渴心田\n祢的怜悯每天都是新鲜\n软弱时候，祢扶持我向前\n在祢怀中我得平安\n\n我要记念祢奇妙作为\n一生传扬祢信实恩惠\n无论高山，无论幽谷\n祢的慈爱永不止息"
  },
  {
    id: "morning-psalm",
    title: "清晨的诗篇",
    author: "示例诗歌",
    tags: "赞美 · 感恩",
    updatedAt: 3,
    lyrics: "清晨我要仰望祢\n等候祢温柔声音\n愿祢话语照亮今天\n领我走生命道路"
  },
  {
    id: "eternal-rock",
    title: "永恒磐石",
    author: "示例诗歌",
    tags: "信仰 · 基督",
    updatedAt: 2,
    lyrics: "祢是我永恒磐石\n风浪中坚固保障\n我的盼望安放于祢\n祢的应许永不动摇"
  },
  {
    id: "quiet-heart",
    title: "我心安静",
    author: "示例诗歌",
    tags: "敬拜 · 奉献",
    updatedAt: 1,
    lyrics: "我心安静在祢面前\n放下忧虑单单仰望\n愿祢旨意成就在我\n愿我一生为祢发光"
  }
];

const STORAGE_KEY = "worship-wiki-v2";
// Backgrounds live on this device only and are deliberately never written to
// the Sheet. Their own key keeps an oversized image from taking songs down.
const BACKGROUND_KEY = "worship-wiki-background-v1";

const translations = {
  "zh-CN": {
    pageTitle: "敬拜百科 · Worship Wiki",
    metaDescription: "为教会敬拜团队整理歌词、自动分页并生成投影幻灯片。",
    brandHome: "敬拜百科首页", brandName: "敬拜百科", mainNav: "主要导航",
    studio: "制作台", library: "曲库", guide: "使用说明", languageLabel: "界面语言",
    saved: "已在此设备保存", saving: "正在保存…", exportSlides: "导出幻灯片",
    worshipLibrary: "敬拜歌曲库", myLibrary: "我的曲库", worshipSongs: "敬拜诗歌",
    newSong: "新建诗歌", searchSong: "搜索诗歌", searchPlaceholder: "搜索歌名或主题…",
    songCount: "{count} 首诗歌", sortRecent: "按最近编辑", tip: "小提示",
    blankTip: "空行会成为幻灯片的自然分页点。", lyricsEditor: "歌词编辑器",
    songName: "诗歌名称", authorSource: "作者 / 来源",
    lyricsPagination: "歌词与分页", lyricsToolbar: "歌词格式工具栏",
    autoPaginate: "自动分页", blankPaginate: "按空行分页", decreaseFont: "缩小字号",
    increaseFont: "放大字号", lyrics: "歌词", editedJustNow: "最近编辑：刚刚",
    slidePreview: "幻灯片预览", livePreview: "实时预览", stageScreen: "舞台画面",
    previousSlide: "上一张", nextSlide: "下一张", visualStyle: "画面样式",
    chooseVisualStyle: "选择画面样式", themeMidnight: "深夜穹顶",
    themeParchment: "古典纸页", themeDawn: "晨光旷野",
    themeForest: "松林晚祷", themeVesper: "暮色晚霞", themeSnow: "素白讲台", readyToShare: "准备分享", close: "关闭",
    exportIntroBefore: "将以当前主题和分页生成 ", exportIntroAfter: " 16:9 幻灯片。",
    pptDescription: "通用演示文件 · .pptx", keynoteDescription: "导入兼容文件 · .pptx",
    pdfDescription: "画面固定 · 适合分享", generate: "生成", generating: "生成中…",
    privacy: "文件只在你的浏览器中生成，歌词不会上传。", threeSteps: "三步完成",
    guideTitle: "从歌词到舞台", addLyrics: "添加歌词",
    addLyricsDesc: "新建诗歌，或从曲库选择并修改。", checkPagination: "检查分页",
    checkPaginationDesc: "每四行自动分页；也可用空行指定页面。", chooseExport: "选择并导出",
    chooseExportDesc: "挑选画面主题，再生成 PPTX、Keynote 兼容文件或 PDF。",
    startCreating: "开始制作", emptyLibrary: "没有找到相关诗歌", untitledSong: "未命名诗歌",
    uncategorized: "未分类", pageShort: "{count}页", slidesCount: "{count} 张",
    lyricsStats: "{lines} 行 · {slides} 张幻灯片", emptyLyrics: "在左侧输入歌词",
    defaultFileName: "敬拜幻灯片", pptLoadError: "PowerPoint 组件尚未加载，请检查网络后重试。",
    pdfLoadError: "PDF 组件尚未加载，请检查网络后重试。", exportSubject: "敬拜歌词幻灯片",
    keynoteReady: "已生成 Keynote 可导入的 PPTX 文件", slidesReady: "幻灯片已生成",
    exportFailed: "导出失败，请稍后重试", firstLyricLine: "在这里输入第一行歌词",
    newTag: "新建",
    sortedRecent: "已按最近编辑排序", languageChanged: "界面语言已更新",
    accessControl: "访问权限", editAccessTitle: "编辑者登录", accountLocal: "本地模式",
    accountGuest: "访客", accountChecking: "检查权限…", accountViewer: "等待邀请",
    accountEditor: "编辑者", localStatusTitle: "本地草稿模式",
    localStatusText: "连接 Google Sheet 后，只有受邀账号可以编辑。",
    guestStatusTitle: "访客只读", guestStatusText: "登录 Google 账号以检查是否拥有编辑权限。",
    checkingStatusTitle: "正在检查权限", checkingStatusText: "正在确认此账号是否是受邀编辑者。",
    viewerStatusTitle: "尚未获得编辑权限", viewerStatusText: "你可以继续查看和导出，或发邮件申请加入编辑。",
    editorStatusTitle: "已获得编辑权限", editorStatusText: "你可以新增、修改并将歌词同步到 Google Sheet。",
    signInGoogle: "使用 Google 登录", requestAccess: "申请编辑权限", leaveEditMode: "退出编辑模式",
    adminLabel: "管理员：", accessSecurityNote: "编辑权限由 Google Drive 共享设置强制执行。",
    cloudReadOnly: "云端曲库 · 只读", cloudEditorReady: "云端曲库 · 已同步", cloudChecking: "正在连接云端…", cloudSaving: "正在同步到云端…",
    googleLoading: "正在加载 Google 登录…", googleLoginFailed: "Google 登录失败，请稍后重试",
    cloudLoadFailed: "暂时无法读取云端曲库，已保留本地内容", cloudSaveFailed: "云端保存失败，请检查网络或权限",
    cloudSaved: "已同步到 Google Sheet", editorRequired: "只有受邀编辑者可以修改歌词",
    deleteSong: "删除诗歌", confirmDelete: "确定删除《{title}》吗？此操作无法撤销。", songDeleted: "诗歌已删除",
    saveToCloud: "保存到云端", savingToCloud: "正在保存…", allSynced: "已保存", nothingToSave: "没有需要保存的修改",
    cloudUnsaved: "云端曲库 · 有未保存的修改",
    tagsLabel: "标签", tagsPlaceholder: "例如：赞美 · 创造", noSongSelected: "曲库为空", emptyEditorHint: "点击左上角 ＋ 新建一首诗歌",
    fontLabel: "字体", fontSerif: "宋体", fontSans: "黑体", ratioLabel: "画面比例", captionLabel: "署名位置",
    capBottomLeft: "署名左下", capBottomRight: "署名右下", capTopLeft: "署名左上", capTopRight: "署名右上", capNone: "不显示署名",
    capBottomCenter: "署名底部居中", capTopCenter: "署名顶部居中",
    uploadBackground: "上传背景图", removeBackground: "移除背景", backgroundLocalOnly: "背景图只保存在本机，不会上传，也不会与其他人共享。",
    appearanceLabel: "日间 / 夜间模式", dayMode: "已切换到日间模式", nightMode: "已切换到夜间模式",
    backgroundApplied: "已应用背景图", backgroundRemoved: "已移除背景图", backgroundInvalid: "请选择一张图片文件",
    backgroundTooLarge: "图片太大，请选择 12MB 以内的图片", backgroundNotStored: "背景图本次可用，但空间不足无法长期保存",
    requestUnavailable: "管理员邮箱尚未配置", accessRequestSubject: "申请加入敬拜百科编辑团队",
    accessRequestBody: "你好，我希望使用以下 Google 账号加入敬拜百科编辑团队：\n\n{email}\n\n请在 Google Sheet 中邀请此账号为编辑者。谢谢！"
  },
  "zh-TW": {
    pageTitle: "敬拜百科 · Worship Wiki",
    metaDescription: "為教會敬拜團隊整理歌詞、自動分頁並產生投影投影片。",
    brandHome: "敬拜百科首頁", brandName: "敬拜百科", mainNav: "主要導覽",
    studio: "製作台", library: "曲庫", guide: "使用說明", languageLabel: "介面語言",
    saved: "已儲存於此裝置", saving: "正在儲存…", exportSlides: "匯出投影片",
    worshipLibrary: "敬拜歌曲庫", myLibrary: "我的曲庫", worshipSongs: "敬拜詩歌",
    newSong: "新增詩歌", searchSong: "搜尋詩歌", searchPlaceholder: "搜尋歌名或主題…",
    songCount: "{count} 首詩歌", sortRecent: "按最近編輯", tip: "小提示",
    blankTip: "空白行會成為投影片的自然分頁點。", lyricsEditor: "歌詞編輯器",
    songName: "詩歌名稱", authorSource: "作者 / 來源",
    lyricsPagination: "歌詞與分頁", lyricsToolbar: "歌詞格式工具列",
    autoPaginate: "自動分頁", blankPaginate: "按空白行分頁", decreaseFont: "縮小字級",
    increaseFont: "放大字級", lyrics: "歌詞", editedJustNow: "最近編輯：剛剛",
    slidePreview: "投影片預覽", livePreview: "即時預覽", stageScreen: "舞台畫面",
    previousSlide: "上一張", nextSlide: "下一張", visualStyle: "畫面樣式",
    chooseVisualStyle: "選擇畫面樣式", themeMidnight: "深夜穹頂",
    themeParchment: "古典紙頁", themeDawn: "晨光曠野",
    themeForest: "松林晚禱", themeVesper: "暮色晚霞", themeSnow: "素白講台", readyToShare: "準備分享", close: "關閉",
    exportIntroBefore: "將以目前主題和分頁產生 ", exportIntroAfter: " 16:9 投影片。",
    pptDescription: "通用簡報檔案 · .pptx", keynoteDescription: "匯入相容檔案 · .pptx",
    pdfDescription: "畫面固定 · 適合分享", generate: "產生", generating: "產生中…",
    privacy: "檔案只在你的瀏覽器中產生，歌詞不會上傳。", threeSteps: "三步完成",
    guideTitle: "從歌詞到舞台", addLyrics: "新增歌詞",
    addLyricsDesc: "新增詩歌，或從曲庫選擇並修改。", checkPagination: "檢查分頁",
    checkPaginationDesc: "每四行自動分頁；也可用空白行指定頁面。", chooseExport: "選擇並匯出",
    chooseExportDesc: "挑選畫面主題，再產生 PPTX、Keynote 相容檔案或 PDF。",
    startCreating: "開始製作", emptyLibrary: "找不到相關詩歌", untitledSong: "未命名詩歌",
    uncategorized: "未分類", pageShort: "{count}頁", slidesCount: "{count} 張",
    lyricsStats: "{lines} 行 · {slides} 張投影片", emptyLyrics: "在左側輸入歌詞",
    defaultFileName: "敬拜投影片", pptLoadError: "PowerPoint 元件尚未載入，請檢查網路後重試。",
    pdfLoadError: "PDF 元件尚未載入，請檢查網路後重試。", exportSubject: "敬拜歌詞投影片",
    keynoteReady: "已產生 Keynote 可匯入的 PPTX 檔案", slidesReady: "投影片已產生",
    exportFailed: "匯出失敗，請稍後重試", firstLyricLine: "在這裡輸入第一行歌詞",
    newTag: "新增",
    sortedRecent: "已按最近編輯排序", languageChanged: "介面語言已更新",
    accessControl: "存取權限", editAccessTitle: "編輯者登入", accountLocal: "本機模式",
    accountGuest: "訪客", accountChecking: "檢查權限…", accountViewer: "等待邀請",
    accountEditor: "編輯者", localStatusTitle: "本機草稿模式",
    localStatusText: "連接 Google Sheet 後，只有受邀帳號可以編輯。",
    guestStatusTitle: "訪客唯讀", guestStatusText: "登入 Google 帳號以檢查是否擁有編輯權限。",
    checkingStatusTitle: "正在檢查權限", checkingStatusText: "正在確認此帳號是否為受邀編輯者。",
    viewerStatusTitle: "尚未獲得編輯權限", viewerStatusText: "你可以繼續檢視和匯出，或寄送郵件申請加入編輯。",
    editorStatusTitle: "已獲得編輯權限", editorStatusText: "你可以新增、修改並將歌詞同步到 Google Sheet。",
    signInGoogle: "使用 Google 登入", requestAccess: "申請編輯權限", leaveEditMode: "退出編輯模式",
    adminLabel: "管理員：", accessSecurityNote: "編輯權限由 Google Drive 共用設定強制執行。",
    cloudReadOnly: "雲端曲庫 · 唯讀", cloudEditorReady: "雲端曲庫 · 已同步", cloudChecking: "正在連接雲端…", cloudSaving: "正在同步到雲端…",
    googleLoading: "正在載入 Google 登入…", googleLoginFailed: "Google 登入失敗，請稍後重試",
    cloudLoadFailed: "暫時無法讀取雲端曲庫，已保留本機內容", cloudSaveFailed: "雲端儲存失敗，請檢查網路或權限",
    cloudSaved: "已同步到 Google Sheet", editorRequired: "只有受邀編輯者可以修改歌詞",
    deleteSong: "刪除詩歌", confirmDelete: "確定刪除《{title}》嗎？此操作無法復原。", songDeleted: "詩歌已刪除",
    saveToCloud: "儲存到雲端", savingToCloud: "正在儲存…", allSynced: "已儲存", nothingToSave: "沒有需要儲存的修改",
    cloudUnsaved: "雲端曲庫 · 有未儲存的修改",
    tagsLabel: "標籤", tagsPlaceholder: "例如：讚美 · 創造", noSongSelected: "曲庫為空", emptyEditorHint: "點擊左上角 ＋ 新增一首詩歌",
    fontLabel: "字體", fontSerif: "宋體", fontSans: "黑體", ratioLabel: "畫面比例", captionLabel: "署名位置",
    capBottomLeft: "署名左下", capBottomRight: "署名右下", capTopLeft: "署名左上", capTopRight: "署名右上", capNone: "不顯示署名",
    capBottomCenter: "署名底部置中", capTopCenter: "署名頂部置中",
    uploadBackground: "上傳背景圖", removeBackground: "移除背景", backgroundLocalOnly: "背景圖只儲存在本機，不會上傳，也不會與其他人共享。",
    appearanceLabel: "日間 / 夜間模式", dayMode: "已切換到日間模式", nightMode: "已切換到夜間模式",
    backgroundApplied: "已套用背景圖", backgroundRemoved: "已移除背景圖", backgroundInvalid: "請選擇一張圖片檔案",
    backgroundTooLarge: "圖片太大，請選擇 12MB 以內的圖片", backgroundNotStored: "背景圖本次可用，但空間不足無法長期儲存",
    requestUnavailable: "管理員電子郵件尚未設定", accessRequestSubject: "申請加入敬拜百科編輯團隊",
    accessRequestBody: "你好，我希望使用以下 Google 帳號加入敬拜百科編輯團隊：\n\n{email}\n\n請在 Google Sheet 中邀請此帳號為編輯者。謝謝！"
  },
  en: {
    pageTitle: "Worship Wiki · Slide Maker",
    metaDescription: "Organize worship lyrics, create slide breaks, and export projection-ready presentations.",
    brandHome: "Worship Wiki home", brandName: "Worship Wiki", mainNav: "Main navigation",
    studio: "Studio", library: "Library", guide: "Guide", languageLabel: "Interface language",
    saved: "Saved on this device", saving: "Saving…", exportSlides: "Export slides",
    worshipLibrary: "Worship song library", myLibrary: "My library", worshipSongs: "Worship songs",
    newSong: "Add song", searchSong: "Search songs", searchPlaceholder: "Search title or theme…",
    songCount: "{count} songs", sortRecent: "Recently edited", tip: "Tip",
    blankTip: "Blank lines create natural slide breaks.", lyricsEditor: "Lyrics editor",
    songName: "Song title", authorSource: "Author / source",
    lyricsPagination: "Lyrics & pagination", lyricsToolbar: "Lyrics formatting toolbar",
    autoPaginate: "Auto paginate", blankPaginate: "Split on blank lines", decreaseFont: "Decrease font size",
    increaseFont: "Increase font size", lyrics: "Lyrics", editedJustNow: "Edited just now",
    slidePreview: "Slide preview", livePreview: "Live preview", stageScreen: "Stage screen",
    previousSlide: "Previous slide", nextSlide: "Next slide", visualStyle: "Visual style",
    chooseVisualStyle: "Choose visual style", themeMidnight: "Midnight Dome",
    themeParchment: "Classic Parchment", themeDawn: "Desert Dawn",
    themeForest: "Evening Pines", themeVesper: "Vesper Dusk", themeSnow: "Clear Lectern", readyToShare: "Ready to share", close: "Close",
    exportIntroBefore: "Create ", exportIntroAfter: " 16:9 slides using the current theme and pagination.",
    pptDescription: "Universal presentation · .pptx", keynoteDescription: "Keynote-compatible import · .pptx",
    pdfDescription: "Fixed layout · Easy to share", generate: "Generate", generating: "Generating…",
    privacy: "Files are generated in your browser. Lyrics are never uploaded.", threeSteps: "Three simple steps",
    guideTitle: "From lyrics to stage", addLyrics: "Add lyrics",
    addLyricsDesc: "Create a song, or choose one from the library to edit.", checkPagination: "Check pagination",
    checkPaginationDesc: "Split every four lines automatically, or use blank lines.", chooseExport: "Choose and export",
    chooseExportDesc: "Pick a visual theme, then create a PPTX, Keynote-compatible file, or PDF.",
    startCreating: "Start creating", emptyLibrary: "No matching songs", untitledSong: "Untitled song",
    uncategorized: "Uncategorized", pageShort: "{count}p", slidesCount: "{count} slides",
    lyricsStats: "{lines} lines · {slides} slides", emptyLyrics: "Enter lyrics on the left",
    defaultFileName: "Worship Slides", pptLoadError: "The PowerPoint exporter has not loaded. Check your connection and try again.",
    pdfLoadError: "The PDF exporter has not loaded. Check your connection and try again.", exportSubject: "Worship lyric slides",
    keynoteReady: "Created a PPTX file ready to import into Keynote", slidesReady: "Your slides are ready",
    exportFailed: "Export failed. Please try again.", firstLyricLine: "Enter the first line of lyrics here",
    newTag: "New",
    sortedRecent: "Sorted by recent edits", languageChanged: "Interface language updated",
    accessControl: "Access control", editAccessTitle: "Editor access", accountLocal: "Local mode",
    accountGuest: "Guest", accountChecking: "Checking access…", accountViewer: "Awaiting invite",
    accountEditor: "Editor", localStatusTitle: "Local draft mode",
    localStatusText: "Once Google Sheets is connected, only invited accounts can edit.",
    guestStatusTitle: "Guest access", guestStatusText: "Sign in with Google to check whether you have editing access.",
    checkingStatusTitle: "Checking access", checkingStatusText: "Confirming whether this account is an invited editor.",
    viewerStatusTitle: "Editing access not granted", viewerStatusText: "You can keep viewing and exporting, or email the administrator to request access.",
    editorStatusTitle: "Editing access granted", editorStatusText: "You can add and update lyrics and sync them to Google Sheets.",
    signInGoogle: "Sign in with Google", requestAccess: "Request editing access", leaveEditMode: "Leave editing mode",
    adminLabel: "Administrator:", accessSecurityNote: "Editing access is enforced by Google Drive sharing permissions.",
    cloudReadOnly: "Cloud library · Read only", cloudEditorReady: "Cloud library · Synced", cloudChecking: "Connecting to cloud…", cloudSaving: "Syncing to cloud…",
    googleLoading: "Loading Google sign-in…", googleLoginFailed: "Google sign-in failed. Please try again.",
    cloudLoadFailed: "The cloud library is unavailable. Local content is still available.", cloudSaveFailed: "Cloud save failed. Check your connection or access.",
    cloudSaved: "Synced to Google Sheets", editorRequired: "Only invited editors can change lyrics",
    deleteSong: "Delete song", confirmDelete: "Delete \"{title}\"? This cannot be undone.", songDeleted: "Song deleted",
    saveToCloud: "Save to cloud", savingToCloud: "Saving…", allSynced: "Saved", nothingToSave: "No unsaved changes",
    cloudUnsaved: "Cloud library · Unsaved changes",
    tagsLabel: "Tags", tagsPlaceholder: "e.g. Praise · Creation", noSongSelected: "Library is empty", emptyEditorHint: "Click ＋ at the top left to add a song",
    fontLabel: "Typeface", fontSerif: "Serif", fontSans: "Sans", ratioLabel: "Slide ratio", captionLabel: "Credit position",
    capBottomLeft: "Credit bottom left", capBottomRight: "Credit bottom right", capTopLeft: "Credit top left", capTopRight: "Credit top right", capNone: "No credit",
    capBottomCenter: "Credit bottom center", capTopCenter: "Credit top center",
    uploadBackground: "Upload background", removeBackground: "Remove background", backgroundLocalOnly: "Backgrounds stay on this device. They are never uploaded or shared with anyone else.",
    appearanceLabel: "Day / night mode", dayMode: "Switched to day mode", nightMode: "Switched to night mode",
    backgroundApplied: "Background applied", backgroundRemoved: "Background removed", backgroundInvalid: "Please choose an image file",
    backgroundTooLarge: "Image too large; please choose one under 12MB", backgroundNotStored: "Background works for now, but there was no room to store it",
    requestUnavailable: "The administrator email has not been configured", accessRequestSubject: "Request to join the Worship Wiki editing team",
    accessRequestBody: "Hello, I would like to join the Worship Wiki editing team using this Google account:\n\n{email}\n\nPlease invite this account as an editor in Google Sheets. Thank you!"
  }
};

function t(key, variables = {}) {
  const value = translations[state?.locale]?.[key] || translations["zh-CN"][key] || key;
  return Object.entries(variables).reduce(
    (result, [name, replacement]) => result.replaceAll(`{${name}}`, String(replacement)),
    value
  );
}

function loadStoredState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!stored || !Array.isArray(stored.songs) || !stored.songs.length) return null;
    return stored;
  } catch (_error) {
    return null;
  }
}

const storedState = loadStoredState();
const storedSongs = storedState?.songs || starterSongs;
const storedActiveId = storedState?.activeId;

const SLIDE_FONTS = { serif: "var(--serif)", sans: "var(--sans)" };
const CAPTION_SPOTS = ["bottom-left", "bottom-center", "bottom-right",
  "top-left", "top-center", "top-right", "none"];
// px sizes feed the export canvas; inches feed the PPTX deck layout.
// Every slide theme in one place: the preview CSS, the export canvas and the
// stored song value all read from these keys.
const THEMES = {
  midnight: { stops: [[0, "#07152f"], [.58, "#112e5a"], [1, "#173e69"]],
    glow: "rgba(217,181,109,.28)", text: "#ffffff",
    ornament: "rgba(217,181,109,.34)", caption: "rgba(255,255,255,.55)", scrim: "rgba(6,14,30,.5)" },
  parchment: { stops: [[0, "#f2ead8"], [1, "#d8c498"]],
    rule: "rgba(71,55,31,.055)", text: "#26304a",
    ornament: "rgba(91,65,26,.22)", caption: "rgba(38,48,74,.58)", scrim: "rgba(244,238,226,.58)" },
  dawn: { stops: [[0, "#4c6884"], [.58, "#b8876d"], [1, "#d9b879"]],
    glow: "rgba(255,236,185,.34)", text: "#ffffff",
    ornament: "rgba(217,181,109,.34)", caption: "rgba(255,255,255,.55)", scrim: "rgba(6,14,30,.5)" },
  forest: { stops: [[0, "#06170f"], [.55, "#0e3423"], [1, "#164c33"]],
    glow: "rgba(164,208,150,.24)", text: "#ffffff",
    ornament: "rgba(178,214,163,.26)", caption: "rgba(255,255,255,.55)", scrim: "rgba(5,20,13,.52)" },
  vesper: { stops: [[0, "#190e2b"], [.55, "#3d1a3e"], [1, "#66274b"]],
    glow: "rgba(240,178,190,.26)", text: "#ffffff",
    ornament: "rgba(236,176,196,.28)", caption: "rgba(255,255,255,.55)", scrim: "rgba(18,8,28,.52)" },
  snow: { stops: [[0, "#ffffff"], [1, "#e9edf3"]],
    text: "#1b2433", ornament: "rgba(27,36,51,.14)",
    caption: "rgba(27,36,51,.55)", scrim: "rgba(248,250,252,.6)" }
};
const THEME_NAMES = Object.keys(THEMES);

const RATIOS = {
  "16:9": { w: 1600, h: 900, inW: 13.333, inH: 7.5, layout: "LAYOUT_WIDE" },
  "4:3": { w: 1600, h: 1200, inW: 10, inH: 7.5, layout: "LAYOUT_4x3" }
};

const state = {
  songs: storedSongs,
  activeId: storedSongs.some((song) => song.id === storedActiveId) ? storedActiveId : storedSongs[0].id,
  slideIndex: 0,
  pagination: storedState?.pagination === "blank" ? "blank" : "auto",
  fontSize: Number.isFinite(storedState?.fontSize) ? storedState.fontSize : 44,
  theme: THEME_NAMES.includes(storedState?.theme) ? storedState.theme : "midnight",
  locale: ["zh-CN", "zh-TW", "en"].includes(storedState?.locale) ? storedState.locale : "zh-CN",
  font: storedState?.font === "sans" ? "sans" : "serif",
  caption: CAPTION_SPOTS.includes(storedState?.caption) ? storedState.caption : "bottom-left",
  ratio: RATIOS[storedState?.ratio] ? storedState.ratio : "16:9",
  appearance: ["dark", "light"].includes(storedState?.appearance) ? storedState.appearance
    : (window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark"),
  background: (() => { try { return localStorage.getItem(BACKGROUND_KEY) || ""; } catch (_e) { return ""; } })()
};

let backgroundImage = null;

function loadBackgroundImage() {
  if (!state.background) { backgroundImage = null; return Promise.resolve(null); }
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => { backgroundImage = image; resolve(image); };
    image.onerror = () => { backgroundImage = null; resolve(null); };
    image.src = state.background;
  });
}

const publicConfig = window.WORSHIP_WIKI_CONFIG || {};
const requiredConfigKeys = ["googleClientId", "googleApiKey", "spreadsheetId", "adminEmail"];
const backend = {
  configured: requiredConfigKeys.every((key) => {
    const value = String(publicConfig[key] || "").trim();
    return value && !value.startsWith("YOUR_");
  }),
  role: "local",
  accessToken: "",
  userEmail: "",
  tokenClient: null,
  dirtySongIds: new Set(),
  saving: false,
  syncTimer: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const elements = {
  songList: $("#songList"), search: $("#songSearch"), count: $("#songCount"),
  title: $("#songTitle"), author: $("#songAuthor"), lyrics: $("#lyricsInput"),
  tags: $("#songTags"), tagSuggestions: $("#tagSuggestions"),
  fontSelect: $("#fontSelect"), captionSelect: $("#captionSelect"),
  ratioSelect: $("#ratioSelect"), aspectChip: $(".aspect-chip"),
  backgroundInput: $("#backgroundInput"), clearBackgroundButton: $("#clearBackgroundButton"),
  appearanceButton: $("#appearanceButton"),
  breadcrumb: $("#breadcrumbTitle"), slideContent: $("#slideContent"),
  slideTitle: $("#slideSongTitle"), currentSlide: $("#currentSlide"),
  totalSlides: $("#totalSlides"), stats: $("#lyricsStats"), slideFrame: $("#slideFrame"),
  fontSizeLabel: $("#fontSizeLabel"), saveState: $("#saveState"), toast: $("#toast"),
  exportDialog: $("#exportDialog"), exportSlideCount: $("#exportSlideCount"), guideDialog: $("#guideDialog"),
  languageSelect: $("#languageSelect"), accountButton: $("#accountButton"), accountLabel: $("#accountLabel"),
  accessDialog: $("#accessDialog"), accessStatus: $("#accessStatus"), accessStatusTitle: $("#accessStatusTitle"),
  accessStatusText: $("#accessStatusText"), googleSignInButton: $("#googleSignInButton"),
  requestAccessButton: $("#requestAccessButton"), leaveEditModeButton: $("#leaveEditModeButton"),
  adminContact: $("#adminContact"), adminEmailLink: $("#adminEmailLink"),
  editorPanel: $(".editor-panel"), libraryPanel: $("#libraryPanel"), newSongButton: $("#newSongButton"),
  deleteSongButton: $("[data-action='delete-song']"),
  saveSongButton: $("#saveSongButton")
};

function translateInterface() {
  document.documentElement.lang = state.locale;
  document.title = t("pageTitle");
  $("meta[name='description']").content = t("metaDescription");
  $$('[data-i18n]').forEach((element) => { element.textContent = t(element.dataset.i18n); });
  $$('[data-i18n-aria]').forEach((element) => { element.setAttribute("aria-label", t(element.dataset.i18nAria)); });
  $$('[data-i18n-placeholder]').forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  elements.languageSelect.value = state.locale;
  renderAccessState();
}

function refreshSaveState() {
  const pending = backend.dirtySongIds.size;
  let key = "saved";
  if (backend.role === "checking") key = "cloudChecking";
  else if (backend.role === "editor") key = backend.saving ? "cloudSaving" : pending ? "cloudUnsaved" : "cloudEditorReady";
  else if (backend.configured) key = "cloudReadOnly";
  elements.saveState.innerHTML = `<i></i> ${t(key)}`;

  const readOnly = backend.configured && backend.role !== "editor";
  elements.deleteSongButton.hidden = readOnly;
  elements.newSongButton.hidden = readOnly;
  const button = elements.saveSongButton;
  button.hidden = !backend.configured || backend.role !== "editor";
  button.disabled = !pending || backend.saving;
  const labelKey = backend.saving ? "savingToCloud" : pending ? "saveToCloud" : "allSynced";
  button.firstElementChild.textContent = pending && !backend.saving
    ? `${t("saveToCloud")} (${pending})`
    : t(labelKey);
}

function renderAccessState() {
  const role = backend.configured ? backend.role : "local";
  const accountKeys = {
    local: "accountLocal", guest: "accountGuest", checking: "accountChecking",
    viewer: "accountViewer", editor: "accountEditor"
  };
  const titleKeys = {
    local: "localStatusTitle", guest: "guestStatusTitle", checking: "checkingStatusTitle",
    viewer: "viewerStatusTitle", editor: "editorStatusTitle"
  };
  const textKeys = {
    local: "localStatusText", guest: "guestStatusText", checking: "checkingStatusText",
    viewer: "viewerStatusText", editor: "editorStatusText"
  };
  elements.accountButton.dataset.role = role;
  elements.accountLabel.textContent = t(accountKeys[role]);
  elements.accessStatus.dataset.role = role;
  elements.accessStatusTitle.textContent = t(titleKeys[role]);
  elements.accessStatusText.textContent = `${t(textKeys[role])}${backend.userEmail ? ` ${backend.userEmail}` : ""}`;
  elements.googleSignInButton.hidden = !backend.configured || role === "checking" || role === "editor";
  elements.requestAccessButton.hidden = !backend.configured || role !== "viewer";
  elements.leaveEditModeButton.hidden = role !== "editor";
  elements.adminContact.hidden = !backend.configured;
  if (backend.configured) {
    elements.adminEmailLink.textContent = publicConfig.adminEmail;
    elements.adminEmailLink.href = `mailto:${publicConfig.adminEmail}`;
  }
  const canEdit = role === "local" || role === "editor";
  elements.title.readOnly = !canEdit;
  elements.author.readOnly = !canEdit;
  elements.lyrics.readOnly = !canEdit;
  elements.newSongButton.disabled = !canEdit;
  elements.editorPanel.classList.toggle("is-readonly", !canEdit);
  refreshSaveState();
}

function activeSong() {
  return state.songs.find((song) => song.id === state.activeId);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function paginate(lyrics) {
  const clean = String(lyrics || "").trim();
  if (!clean) return [[t("emptyLyrics")]];
  const blocks = clean.split(/\n\s*\n/).map((block) => block.split("\n").filter((line) => line.trim()));
  if (state.pagination === "blank") return blocks;
  const pages = [];
  blocks.forEach((block) => {
    for (let index = 0; index < block.length; index += 4) pages.push(block.slice(index, index + 4));
  });
  return pages;
}

function saveNow() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      songs: state.songs, activeId: state.activeId, pagination: state.pagination,
      fontSize: state.fontSize, theme: state.theme, locale: state.locale,
      font: state.font, caption: state.caption, ratio: state.ratio,
      appearance: state.appearance
    }));
  } catch (error) {
    console.warn("Local save unavailable", error);
  }
  refreshSaveState();
}

function scheduleSave() {
  if (!backend.configured) elements.saveState.innerHTML = `<i></i> ${t("saving")}`;
  window.clearTimeout(scheduleSave.timeout);
  scheduleSave.timeout = window.setTimeout(saveNow, 450);
}

function refreshTagSuggestions() {
  const tags = [...new Set(state.songs.map((song) => song.tags).filter(Boolean))].sort();
  elements.tagSuggestions.innerHTML = tags.map((tag) => `<option value="${escapeHtml(tag)}"></option>`).join("");
}

function renderLibrary(filter = "") {
  const query = filter.trim().toLocaleLowerCase(state.locale);
  const filtered = state.songs.filter((song) =>
    [song.title, song.author, song.tags].join(" ").toLocaleLowerCase(state.locale).includes(query)
  );
  elements.count.textContent = t("songCount", { count: filtered.length });
  elements.songList.innerHTML = filtered.length ? filtered.map((song, index) => {
    const pages = paginate(song.lyrics).length;
    return `
      <button class="song-item ${song.id === state.activeId ? "active" : ""}" type="button" data-song-id="${escapeHtml(song.id)}">
        <span class="song-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="song-copy"><strong>${escapeHtml(song.title || t("untitledSong"))}</strong><span>${escapeHtml(song.tags || song.author || t("uncategorized"))}</span></span>
        <span class="song-pages">${t("pageShort", { count: pages })}</span>
      </button>`;
  }).join("") : `<p class="empty-library">${t("emptyLibrary")}</p>`;
}

function renderEditor() {
  const song = activeSong();
  // An empty library is a valid state: blank the editor rather than inventing a song.
  elements.editorPanel.classList.toggle("is-empty", !song);
  // Pairs, not a data-attribute lookup: a missing attribute silently blanked the
  // field it was meant to fill, and a blank lyrics box is one keystroke from data loss.
  [[elements.title, "title"], [elements.author, "author"],
   [elements.tags, "tags"], [elements.lyrics, "lyrics"]].forEach(([field, key]) => {
    field.value = song ? song[key] || "" : "";
    field.disabled = !song;
  });
  if (!song) {
    elements.breadcrumb.textContent = t("noSongSelected");
    state.slideIndex = 0;
    renderControls();
    renderPreview();
    return;
  }
  elements.breadcrumb.textContent = song.title || t("untitledSong");
  state.slideIndex = 0;
  refreshTagSuggestions();
  renderControls();
  renderPreview();
}

function renderControls() {
  $$('[data-mode]').forEach((item) => item.classList.toggle("active", item.dataset.mode === state.pagination));
  $$('[data-theme]').forEach((item) => item.classList.toggle("active", item.dataset.theme === state.theme));
  elements.slideFrame.className = `slide-frame theme-${state.theme} font-${state.font} cap-${state.caption}`;
  elements.slideFrame.style.aspectRatio = state.ratio.replace(":", " / ");
  elements.slideFrame.style.backgroundImage = state.background ? `url("${state.background}")` : "";
  elements.slideFrame.classList.toggle("has-background", Boolean(state.background));
  elements.clearBackgroundButton.hidden = !state.background;
  elements.aspectChip.textContent = state.ratio;
  elements.ratioSelect.value = state.ratio;
  elements.fontSelect.value = state.font;
  elements.captionSelect.value = state.caption;
}

function renderPreview() {
  const song = activeSong() || { lyrics: "", title: "" };
  const slides = paginate(song.lyrics);
  state.slideIndex = Math.min(state.slideIndex, slides.length - 1);
  const lines = slides[state.slideIndex] || [];
  elements.slideContent.innerHTML = lines.map((line) => `<div>${escapeHtml(line)}</div>`).join("");
  elements.slideContent.style.fontSize = `${Math.max(14, state.fontSize / 1.65)}px`;
  elements.slideTitle.textContent = slideCaption(song);
  elements.currentSlide.textContent = state.slideIndex + 1;
  elements.totalSlides.textContent = slides.length;
  elements.fontSizeLabel.textContent = state.fontSize;
  elements.exportSlideCount.textContent = t("slidesCount", { count: slides.length });
  const lineCount = String(song.lyrics || "").split("\n").filter((line) => line.trim()).length;
  elements.stats.textContent = t("lyricsStats", { lines: lineCount, slides: slides.length });
  renderLibrary(elements.search.value);
}

function updateSong(field, value, shouldRender = true) {
  if (backend.configured && backend.role !== "editor") {
    showToast(t("editorRequired"));
    renderEditor();
    return;
  }
  const song = activeSong();
  if (!song) return;
  song[field] = value;
  song.updatedAt = Date.now();
  if (field === "title") elements.breadcrumb.textContent = value || t("untitledSong");
  if (shouldRender) renderPreview();
  scheduleSave();
  if (["title", "author", "lyrics"].includes(field)) markSongDirty(song.id);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => elements.toast.classList.remove("show"), 2600);
}

function sanitizeFileName(value) {
  return String(value || t("defaultFileName")).replace(/[\\/:*?"<>|]/g, "-").trim() || t("defaultFileName");
}

function renderSlideCanvas(lines, song) {
  const canvas = document.createElement("canvas");
  canvas.width = RATIOS[state.ratio].w;
  canvas.height = RATIOS[state.ratio].h;
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  let textColor = "#ffffff";
  const canvasSerif = state.locale === "zh-TW" ? '"Noto Serif TC", "Songti TC", serif' : state.locale === "en" ? 'Georgia, "Times New Roman", serif' : '"Noto Serif SC", "Songti SC", serif';
  const canvasSans = state.locale === "zh-TW" ? '"Noto Sans TC", "PingFang TC", sans-serif' : state.locale === "en" ? 'Inter, Arial, sans-serif' : '"Noto Sans SC", "PingFang SC", sans-serif';

  const theme = THEMES[state.theme] || THEMES.midnight;
  const gradient = context.createLinearGradient(0, 0, width, height);
  theme.stops.forEach(([at, color]) => gradient.addColorStop(at, color));
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  textColor = theme.text;

  if (theme.glow) {
    // Proportional, so the highlight lands in the same place at any ratio.
    const glow = context.createRadialGradient(width * 0.8, height * 0.172, 0,
      width * 0.8, height * 0.172, width * 0.269);
    glow.addColorStop(0, theme.glow);
    glow.addColorStop(1, theme.glow.replace(/[\d.]+\)$/, "0)"));
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);
  }

  if (theme.rule) {
    context.strokeStyle = theme.rule;
    for (let y = 0; y < height; y += 18) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y + 10);
      context.stroke();
    }
  }

  context.save();
  context.strokeStyle = theme.ornament;
  context.lineWidth = 2;
  [0.244, 0.269, 0.3].forEach((ratio) => {
    context.beginPath();
    context.arc(width * 0.9125, -height * 0.183, width * ratio, 0, Math.PI * 2);
    context.stroke();
  });
  context.restore();

  if (backgroundImage) {
    const scale = Math.max(width / backgroundImage.width, height / backgroundImage.height);
    const drawW = backgroundImage.width * scale;
    const drawH = backgroundImage.height * scale;
    context.drawImage(backgroundImage, (width - drawW) / 2, (height - drawH) / 2, drawW, drawH);
    // A photo behind text is unreadable without a scrim; match it to the theme's text colour.
    context.fillStyle = theme.scrim;
    context.fillRect(0, 0, width, height);
  }

  let fontPx = Math.min(state.fontSize * 1.78, 98);
  const maxTextWidth = width * 0.82;
  do {
    context.font = `700 ${fontPx}px ${state.font === "sans" ? canvasSans : canvasSerif}`;
    if (Math.max(...lines.map((line) => context.measureText(line).width), 0) <= maxTextWidth) break;
    fontPx -= 2;
  } while (fontPx > 46);

  const lineHeight = fontPx * 1.62;
  const groupHeight = Math.max(0, (lines.length - 1) * lineHeight);
  const startY = height / 2 - groupHeight / 2;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = textColor;
  if (state.theme !== "parchment") {
    context.shadowColor = "rgba(0,0,0,.28)";
    context.shadowBlur = 16;
    context.shadowOffsetY = 4;
  }
  lines.forEach((line, index) => context.fillText(line, width / 2, startY + index * lineHeight));
  context.shadowColor = "transparent";
  if (state.caption !== "none") {
    const align = state.caption.endsWith("right") ? "right"
      : state.caption.endsWith("center") ? "center" : "left";
    context.font = `500 22px ${state.font === "sans" ? canvasSans : canvasSerif}`;
    context.textAlign = align;
    context.fillStyle = theme.caption;
    const capX = align === "right" ? width - 80 : align === "center" ? width / 2 : 80;
    context.fillText(slideCaption(song), capX,
      state.caption.startsWith("top") ? height * 0.078 : height * 0.931);
  }
  return canvas;
}

const MAX_BACKGROUND_BYTES = 12 * 1024 * 1024;

// Downscale before storing: a phone photo as a data URL will blow the ~5MB
// localStorage budget, and the slide canvas is only 1600px wide anyway.
async function shrinkBackground(file) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1920 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close?.();
  return canvas.toDataURL("image/jpeg", 0.82);
}

async function setBackground(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) { showToast(t("backgroundInvalid")); return; }
  if (file.size > MAX_BACKGROUND_BYTES) { showToast(t("backgroundTooLarge")); return; }
  try {
    state.background = await shrinkBackground(file);
  } catch (_error) {
    showToast(t("backgroundInvalid"));
    return;
  }
  await loadBackgroundImage();
  try {
    localStorage.setItem(BACKGROUND_KEY, state.background);
  } catch (_error) {
    // Keep it for this session rather than losing the upload outright.
    showToast(t("backgroundNotStored"));
  }
  renderControls();
  renderPreview();
  showToast(t("backgroundApplied"));
}

function clearBackground() {
  state.background = "";
  backgroundImage = null;
  try { localStorage.removeItem(BACKGROUND_KEY); } catch (_error) { /* nothing to clean up */ }
  renderControls();
  renderPreview();
  showToast(t("backgroundRemoved"));
}

function slideCaption(song) {
  const title = song.title || t("untitledSong");
  const author = String(song.author || "").trim();
  return author ? `${title} · ${author}` : title;
}

async function exportPptx(fileName, keynoteCompatible = false) {
  if (!window.PptxGenJS) throw new Error(t("pptLoadError"));
  const song = activeSong();
  const pages = paginate(song.lyrics);
  const deck = new window.PptxGenJS();
  deck.layout = RATIOS[state.ratio].layout;
  deck.author = "敬拜百科 Worship Wiki";
  deck.company = "Worship Wiki";
  deck.subject = t("exportSubject");
  deck.title = song.title || t("defaultFileName");
  deck.lang = state.locale;
  pages.forEach((lines) => {
    const slide = deck.addSlide();
    slide.background = { color: state.theme === "parchment" ? "F2EAD8" : "10274E" };
    slide.addImage({ data: renderSlideCanvas(lines, song).toDataURL("image/png"), x: 0, y: 0,
      w: RATIOS[state.ratio].inW, h: RATIOS[state.ratio].inH });
  });
  await deck.writeFile({ fileName: `${fileName}${keynoteCompatible ? "-Keynote" : ""}.pptx`, compression: true });
}

async function exportPdf(fileName) {
  if (!window.jspdf?.jsPDF) throw new Error(t("pdfLoadError"));
  const { jsPDF } = window.jspdf;
  const song = activeSong();
  const pages = paginate(song.lyrics);
  const { w: pw, h: ph } = RATIOS[state.ratio];
  const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [pw, ph], hotfixes: ["px_scaling"] });
  pdf.setProperties({ title: song.title || t("defaultFileName"), author: "Worship Wiki", subject: t("exportSubject") });
  pages.forEach((lines, index) => {
    if (index > 0) pdf.addPage([pw, ph], "landscape");
    pdf.addImage(renderSlideCanvas(lines, song).toDataURL("image/jpeg", 0.94), "JPEG", 0, 0, pw, ph, undefined, "FAST");
  });
  pdf.save(`${fileName}.pdf`);
}

async function handleExport(format, button) {
  const fileName = sanitizeFileName(activeSong().title);
  const options = $$('[data-export-format]');
  options.forEach((option) => { option.disabled = true; });
  const actionLabel = button.querySelector("i");
  const previousLabel = actionLabel.textContent;
  actionLabel.textContent = t("generating");
  try {
    if (document.fonts?.ready) await document.fonts.ready;
    if (state.background && !backgroundImage) await loadBackgroundImage();
    if (format === "pdf") await exportPdf(fileName);
    else await exportPptx(fileName, format === "keynote");
    elements.exportDialog.close();
    showToast(format === "keynote" ? t("keynoteReady") : t("slidesReady"));
  } catch (error) {
    console.error(error);
    showToast(error.message || t("exportFailed"));
  } finally {
    actionLabel.textContent = previousLabel;
    options.forEach((option) => { option.disabled = false; });
  }
}

function sheetsValuesUrl(range, query = {}, action = "") {
  const params = new URLSearchParams(query);
  const suffix = params.size ? `?${params.toString()}` : "";
  return `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(publicConfig.spreadsheetId)}/values/${encodeURIComponent(range)}${action}${suffix}`;
}

async function googleApiRequest(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const error = new Error(`Google API request failed (${response.status})`);
    error.status = response.status;
    try { error.details = await response.json(); } catch (_error) { error.details = null; }
    throw error;
  }
  return response.status === 204 ? {} : response.json();
}

function authorizationHeaders(accessToken, withJson = false) {
  const headers = {};
  if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
  if (withJson) headers["Content-Type"] = "application/json";
  return headers;
}

async function readSheetRange(range, accessToken = "") {
  const query = accessToken ? {} : { key: publicConfig.googleApiKey };
  return googleApiRequest(sheetsValuesUrl(range, query), {
    headers: authorizationHeaders(accessToken)
  });
}

async function writeSheetRange(range, values, accessToken) {
  return googleApiRequest(sheetsValuesUrl(range, { valueInputOption: "RAW" }), {
    method: "PUT",
    headers: authorizationHeaders(accessToken, true),
    body: JSON.stringify({ range, majorDimension: "ROWS", values })
  });
}

async function appendSheetRow(values, accessToken) {
  return googleApiRequest(sheetsValuesUrl(publicConfig.appendRange || "Songs!A:I", {
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS"
  }, ":append"), {
    method: "POST",
    headers: authorizationHeaders(accessToken, true),
    body: JSON.stringify({ majorDimension: "ROWS", values: [values] })
  });
}

function rowsToSongs(rows = []) {
  return rows.map((row, index) => {
    if (!row?.[0] && !row?.[1]) return null;
    return {
      id: row[0] || `sheet-row-${index + 2}`,
      title: row[1] || t("untitledSong"),
      author: row[2] || "",
      tags: row[3] || "",
      lyrics: row[4] || "",
      theme: THEME_NAMES.includes(row[5]) ? row[5] : "midnight",
      updatedAt: Date.parse(row[6]) || 0,
      updatedBy: row[7] || "",
      version: Number(row[8]) || 0,
      rowNumber: index + 2
    };
  }).filter(Boolean);
}

async function loadRemoteSongs({ accessToken = backend.accessToken, silent = false } = {}) {
  if (!backend.configured || backend.dirtySongIds.size) return false;
  try {
    const payload = await readSheetRange(publicConfig.songsRange || "Songs!A2:I", accessToken);
    const remoteSongs = rowsToSongs(payload.values);
    if (!remoteSongs.length) return true;
    const previousActiveId = state.activeId;
    state.songs = remoteSongs;
    state.activeId = remoteSongs.some((song) => song.id === previousActiveId) ? previousActiveId : remoteSongs[0].id;
    renderLibrary(elements.search.value);
    renderEditor();
    saveNow();
    return true;
  } catch (error) {
    console.warn("Cloud library load failed", error);
    if (!silent) showToast(t("cloudLoadFailed"));
    return false;
  }
}

function songRowValues(song) {
  return [
    song.id,
    song.title,
    song.author,
    song.tags,
    song.lyrics,
    song.theme || state.theme,
    new Date().toISOString(),
    backend.userEmail,
    (Number(song.version) || 0) + 1
  ];
}

function songRowRange(rowNumber) {
  const sourceRange = publicConfig.songsRange || "Songs!A2:I";
  const sheetName = sourceRange.includes("!") ? sourceRange.split("!")[0] : "Songs";
  return `${sheetName}!A${rowNumber}:I${rowNumber}`;
}

async function saveSongRemote(songId) {
  if (!backend.configured || backend.role !== "editor" || !backend.accessToken) return;
  const song = state.songs.find((item) => item.id === songId);
  if (!song) return;
  try {
    const values = songRowValues(song);
    if (song.rowNumber) {
      await writeSheetRange(songRowRange(song.rowNumber), [values], backend.accessToken);
    } else {
      const result = await appendSheetRow(values, backend.accessToken);
      const updatedRange = result.updates?.updatedRange || "";
      const rowMatch = updatedRange.match(/![A-Z]+(\d+):/);
      if (rowMatch) song.rowNumber = Number(rowMatch[1]);
    }
    song.updatedAt = Date.parse(values[6]);
    song.updatedBy = backend.userEmail;
    song.version = values[8];
    backend.dirtySongIds.delete(songId);
    refreshSaveState();
  } catch (error) {
    console.warn("Cloud save failed", error);
    showToast(error.status === 403 ? t("editorRequired") : t("cloudSaveFailed"));
    if (error.status === 401 || error.status === 403) setAccessRole("viewer");
  }
}

async function deleteActiveSong() {
  const song = activeSong();
  if (!song) return;
  if (backend.configured && backend.role !== "editor") {
    showToast(t("editorRequired"));
    return;
  }
  const label = song.title || t("untitledSong");
  if (!window.confirm(t("confirmDelete").replace("{title}", label))) return;

  // Drop the pending-save mark, or Save would re-create the row we are removing.
  backend.dirtySongIds.delete(song.id);

  state.songs = state.songs.filter((item) => item.id !== song.id);
  state.activeId = state.songs.length ? state.songs[0].id : "";
  renderLibrary(elements.search.value);
  renderEditor();
  saveNow();
  refreshSaveState();
  showToast(t("songDeleted"));

  if (!song.rowNumber || backend.role !== "editor" || !backend.accessToken) return;
  try {
    // Blank the row instead of deleting it: saveSongRemote() addresses rows by
    // rowNumber, and removing a row would shift every song below it.
    await writeSheetRange(songRowRange(song.rowNumber), [Array(9).fill("")], backend.accessToken);
  } catch (error) {
    console.warn("Cloud delete failed", error);
    showToast(t("cloudSaveFailed"));
  }
}

// Edits stay local until the editor presses Save; this only records what is pending.
function markSongDirty(songId = state.activeId) {
  if (!backend.configured || backend.role !== "editor" || !songId) return;
  backend.dirtySongIds.add(songId);
  refreshSaveState();
}

async function saveDirtySongs() {
  if (!backend.configured || backend.role !== "editor") {
    showToast(t("editorRequired"));
    return;
  }
  if (!backend.dirtySongIds.size || backend.saving) {
    if (!backend.saving) showToast(t("nothingToSave"));
    return;
  }
  backend.saving = true;
  refreshSaveState();
  // Sequential: saveSongRemote() appends new rows and records the row number it
  // got back, and parallel appends would race for the same row.
  for (const songId of [...backend.dirtySongIds]) await saveSongRemote(songId);
  backend.saving = false;
  refreshSaveState();
  if (!backend.dirtySongIds.size) showToast(t("cloudSaved"));
}

function setAccessRole(role) {
  backend.role = role;
  renderAccessState();
  refreshSaveState();
}

function waitForGoogleIdentity() {
  if (window.google?.accounts?.oauth2) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      if (window.google?.accounts?.oauth2) {
        window.clearInterval(timer);
        resolve();
      } else if (Date.now() - startedAt > 10000) {
        window.clearInterval(timer);
        reject(new Error("Google Identity Services did not load"));
      }
    }, 100);
  });
}

async function requestGoogleAccessToken() {
  await waitForGoogleIdentity();
  return new Promise((resolve, reject) => {
    backend.tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: publicConfig.googleClientId,
      scope: "openid email https://www.googleapis.com/auth/spreadsheets",
      callback(response) {
        if (response?.error || !response?.access_token) reject(new Error(response?.error || "Missing access token"));
        else resolve(response.access_token);
      },
      error_callback(error) { reject(new Error(error?.type || "Google sign-in failed")); }
    });
    backend.tokenClient.requestAccessToken({ prompt: "consent" });
  });
}

async function readGoogleUserEmail(accessToken) {
  try {
    const profile = await googleApiRequest("https://openidconnect.googleapis.com/v1/userinfo", {
      headers: authorizationHeaders(accessToken)
    });
    return profile.email || "";
  } catch (_error) {
    return "";
  }
}

async function verifyEditorAccess(accessToken) {
  const range = publicConfig.accessCheckRange || "_config!A1";
  const current = await readSheetRange(range, accessToken);
  const value = current.values?.[0]?.[0] || publicConfig.accessCheckValue || "worship-wiki-access-check";
  await writeSheetRange(range, [[value]], accessToken);
}

async function signInWithGoogle() {
  if (!backend.configured) return;
  setAccessRole("checking");
  try {
    const accessToken = await requestGoogleAccessToken();
    backend.accessToken = accessToken;
    backend.userEmail = await readGoogleUserEmail(accessToken);
    try {
      await verifyEditorAccess(accessToken);
      setAccessRole("editor");
    } catch (error) {
      if (error.status !== 401 && error.status !== 403) throw error;
      setAccessRole("viewer");
    }
    await loadRemoteSongs({ accessToken, silent: true });
  } catch (error) {
    console.warn("Google sign-in failed", error);
    backend.accessToken = "";
    backend.userEmail = "";
    setAccessRole("guest");
    showToast(t("googleLoginFailed"));
  }
}

function leaveEditMode() {
  backend.accessToken = "";
  backend.userEmail = "";
  backend.dirtySongIds.clear();
  setAccessRole("guest");
  elements.accessDialog.close();
}

function requestEditorAccess() {
  if (!backend.configured || !publicConfig.adminEmail) {
    showToast(t("requestUnavailable"));
    return;
  }
  const subject = encodeURIComponent(t("accessRequestSubject"));
  const body = encodeURIComponent(t("accessRequestBody", { email: backend.userEmail || "" }));
  window.location.href = `mailto:${publicConfig.adminEmail}?subject=${subject}&body=${body}`;
}

async function initializeBackend() {
  if (!backend.configured) {
    setAccessRole("local");
    return;
  }
  setAccessRole("guest");
  await loadRemoteSongs();
  const interval = Math.max(15000, Number(publicConfig.syncIntervalMs) || 30000);
  backend.syncTimer = window.setInterval(() => {
    const editing = [elements.title, elements.author, elements.lyrics].includes(document.activeElement);
    if (!editing && !backend.dirtySongIds.size) void loadRemoteSongs({ silent: true });
  }, interval);
}

function createSong({ title = t("untitledSong"), author = "", lyrics = t("firstLyricLine") } = {}) {
  if (backend.configured && backend.role !== "editor") {
    showToast(t("editorRequired"));
    return null;
  }
  const id = `song-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  state.songs.unshift({ id, title, author, tags: t("newTag"), lyrics, updatedAt: Date.now() });
  state.activeId = id;
  renderLibrary();
  renderEditor();
  scheduleSave();
  markSongDirty(id);
  return activeSong();
}

elements.songList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-song-id]");
  if (!item) return;
  state.activeId = item.dataset.songId;
  renderEditor();
  scheduleSave();
});
elements.search.addEventListener("input", (event) => renderLibrary(event.target.value));
elements.title.addEventListener("input", (event) => updateSong("title", event.target.value));
elements.author.addEventListener("input", (event) => updateSong("author", event.target.value));
elements.lyrics.addEventListener("input", (event) => updateSong("lyrics", event.target.value));
elements.tags.addEventListener("input", (event) => updateSong("tags", event.target.value, false));

$("#prevSlide").addEventListener("click", () => {
  const count = paginate(activeSong().lyrics).length;
  state.slideIndex = (state.slideIndex - 1 + count) % count;
  renderPreview();
});
$("#nextSlide").addEventListener("click", () => {
  const count = paginate(activeSong().lyrics).length;
  state.slideIndex = (state.slideIndex + 1) % count;
  renderPreview();
});

$$('[data-mode]').forEach((button) => button.addEventListener("click", () => {
  state.pagination = button.dataset.mode;
  state.slideIndex = 0;
  renderControls();
  renderPreview();
  scheduleSave();
}));
$$('[data-theme]').forEach((button) => button.addEventListener("click", () => {
  state.theme = button.dataset.theme;
  renderControls();
  renderPreview();
  saveNow();
}));
$("[data-action='decrease-font']").addEventListener("click", () => {
  state.fontSize = Math.max(32, state.fontSize - 2);
  renderPreview();
  scheduleSave();
});
$("[data-action='increase-font']").addEventListener("click", () => {
  state.fontSize = Math.min(60, state.fontSize + 2);
  renderPreview();
  scheduleSave();
});

$("#newSongButton").addEventListener("click", () => {
  const song = createSong();
  if (song) elements.title.select();
});
$("#exportButton").addEventListener("click", () => {
  elements.exportSlideCount.textContent = t("slidesCount", { count: paginate(activeSong().lyrics).length });
  elements.exportDialog.showModal();
});
$$('[data-export-format]').forEach((button) => button.addEventListener("click", () => handleExport(button.dataset.exportFormat, button)));
elements.accountButton.addEventListener("click", () => elements.accessDialog.showModal());
elements.googleSignInButton.addEventListener("click", signInWithGoogle);
elements.requestAccessButton.addEventListener("click", requestEditorAccess);
elements.leaveEditModeButton.addEventListener("click", leaveEditMode);
elements.languageSelect.addEventListener("change", (event) => {
  state.locale = event.target.value;
  translateInterface();
  renderPreview();
  scheduleSave();
  showToast(t("languageChanged"));
});
function activateNav(button, panel, field) {
  $$(".nav-link").forEach((link) => link.classList.toggle("active", link === button));
  // Panels sit side by side on wide screens and stack on narrow ones, so scroll
  // first and let focus do the visible work when everything is already in view.
  const bounds = panel.getBoundingClientRect();
  const onScreen = bounds.top < window.innerHeight && bounds.bottom > 0
    && bounds.left < window.innerWidth && bounds.right > 0;
  if (!onScreen) panel.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  if (field.disabled) return;
  field.focus({ preventScroll: true });
  if (field.select) field.select();
  // On wide screens every panel is already visible, so focus alone looks like
  // nothing happened. Flash the target so the click is acknowledged.
  const box = field.closest(".search-box");
  if (!box) return;
  box.classList.remove("is-pinged");
  void box.offsetWidth;
  box.classList.add("is-pinged");
}

function applyAppearance() {
  // data-appearance, not data-theme: the slide-theme buttons own [data-theme].
  document.documentElement.dataset.appearance = state.appearance;
  elements.appearanceButton.setAttribute("aria-pressed", String(state.appearance === "light"));
}

elements.appearanceButton.addEventListener("click", () => {
  state.appearance = state.appearance === "light" ? "dark" : "light";
  applyAppearance();
  saveNow();
  showToast(t(state.appearance === "light" ? "dayMode" : "nightMode"));
});

elements.backgroundInput.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  event.target.value = "";   // let the same file be re-picked after a clear
  void setBackground(file);
});

elements.clearBackgroundButton.addEventListener("click", clearBackground);

elements.ratioSelect.addEventListener("change", (event) => {
  state.ratio = RATIOS[event.target.value] ? event.target.value : "16:9";
  renderControls();
  saveNow();
});

elements.fontSelect.addEventListener("change", (event) => {
  state.font = event.target.value === "sans" ? "sans" : "serif";
  renderControls();
  saveNow();
});

elements.captionSelect.addEventListener("change", (event) => {
  state.caption = CAPTION_SPOTS.includes(event.target.value) ? event.target.value : "bottom-left";
  renderControls();
  saveNow();
});

$("[data-action='focus-library']").addEventListener("click", (event) =>
  activateNav(event.currentTarget, elements.libraryPanel, elements.search));
$("[data-action='focus-studio']").addEventListener("click", (event) =>
  activateNav(event.currentTarget, elements.editorPanel, elements.lyrics));
$("[data-action='show-guide']").addEventListener("click", () => elements.guideDialog.showModal());
$("[data-action='delete-song']").addEventListener("click", () => void deleteActiveSong());
elements.saveSongButton.addEventListener("click", () => void saveDirtySongs());
$("[data-action='sort-songs']").addEventListener("click", () => {
  state.songs.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  renderLibrary(elements.search.value);
  scheduleSave();
  showToast(t("sortedRecent"));
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    elements.search.focus();
  }
  if (event.key === "ArrowLeft" && event.altKey) $("#prevSlide").click();
  if (event.key === "ArrowRight" && event.altKey) $("#nextSlide").click();
});
window.addEventListener("beforeunload", (event) => {
  saveNow();
  if (!backend.dirtySongIds.size) return;
  event.preventDefault();
  event.returnValue = "";
});

function registerWebMcpTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const register = (tool) => {
    try {
      void Promise.resolve(context.registerTool(tool)).catch((error) => console.warn("WebMCP tool registration failed", error));
    } catch (error) {
      console.warn("WebMCP tool registration failed", error);
    }
  };

  register({
    name: "get_current_worship_deck",
    title: "查看当前敬拜幻灯片",
    description: "读取当前诗歌、主题、分页方式和已经生成的歌词页面。",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: true },
    execute() {
      const song = activeSong();
      return { title: song.title, author: song.author, theme: state.theme, pagination: state.pagination, slides: paginate(song.lyrics) };
    }
  });

  register({
    name: "update_current_worship_song",
    title: "更新当前敬拜诗歌",
    description: "更新当前选中诗歌的标题、作者或歌词，并刷新可见的幻灯片预览。",
    inputSchema: {
      type: "object",
      properties: { title: { type: "string" }, author: { type: "string" }, lyrics: { type: "string" } },
      minProperties: 1,
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute(input) {
      if (backend.configured && backend.role !== "editor") throw new Error(t("editorRequired"));
      if (!input || typeof input !== "object" || !["title", "author", "lyrics"].some((field) => typeof input[field] === "string")) {
        throw new Error("请至少提供 title、author 或 lyrics 中的一项文本内容。");
      }
      ["title", "author", "lyrics"].forEach((field) => {
        if (typeof input[field] === "string") activeSong()[field] = input[field];
      });
      activeSong().updatedAt = Date.now();
      renderEditor();
      saveNow();
      markSongDirty(activeSong().id);
      return { updated: true, id: activeSong().id, title: activeSong().title, slideCount: paginate(activeSong().lyrics).length };
    }
  });

  register({
    name: "create_worship_song",
    title: "新建敬拜诗歌",
    description: "在曲库中新建诗歌并将它显示在编辑器中。",
    inputSchema: {
      type: "object",
      properties: { title: { type: "string" }, author: { type: "string" }, lyrics: { type: "string" } },
      required: ["title", "lyrics"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute(input) {
      if (backend.configured && backend.role !== "editor") throw new Error(t("editorRequired"));
      if (!input || typeof input.title !== "string" || typeof input.lyrics !== "string") {
        throw new Error("title 和 lyrics 都必须是文本。");
      }
      const song = createSong(input);
      saveNow();
      return { created: true, id: song.id, title: song.title, slideCount: paginate(song.lyrics).length };
    }
  });
}

applyAppearance();
translateInterface();
renderLibrary();
renderEditor();
registerWebMcpTools();
void initializeBackend();
