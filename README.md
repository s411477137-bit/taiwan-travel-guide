# 台灣旅遊靈感圖鑑｜Taiwan Travel Guide

一個以台灣景點為主題的簡約清新風格網站，使用原生 HTML、CSS、JavaScript 製作，適合部署到 GitHub Pages。

## 功能
- 台灣景點卡片展示
- 北部、中部、南部、東部地區篩選
- 景點名稱、城市與類型關鍵字搜尋
- 點擊卡片查看景點介紹與旅遊提醒
- 支援手機、平板與桌機瀏覽

## 專案結構
```text
taiwan-travel-guide/
├── index.html
├── style.css
├── script.js
├── AGENTS.md
├── README.md
└── data/
    └── places.js
```

## 如何在本機預覽
1. 下載或複製整個專案資料夾。
2. 使用瀏覽器開啟 `index.html`。
3. 若要修改景點，編輯 `data/places.js`。

## 如何新增景點
在 `data/places.js` 的 `places` 陣列中新增一個物件。請參考現有資料格式，並確認 `id` 唯一。新增規則詳見 `AGENTS.md`。

## 發布到 GitHub Pages
1. 在 GitHub 建立新的 Repository，例如 `taiwan-travel-guide`。
2. 將本資料夾內所有檔案上傳至 Repository 根目錄。
3. 進入 Repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**。
5. Branch 選 `main`，資料夾選 `/ (root)`，按下 **Save**。
6. 等待 GitHub Pages 部署完成，網站網址通常為：
   `https://你的GitHub帳號.github.io/taiwan-travel-guide/`

## 注意
- 景點資訊為示範內容，正式展示前請自行確認最新開放狀況與交通資訊。
- 圖片使用外部圖片網址，需保持網路連線才能載入。
- 本專案為課程學習用途。
