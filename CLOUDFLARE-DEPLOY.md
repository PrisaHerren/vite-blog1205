# Stories 部落格模板 → Cloudflare Workers（純 Next.js 16 + React 19 + OpenNext）

> **更新說明**：這個專案原本用 Cloudflare 的實驗性專案 vinext 部署，後來改回
> **純標準 `next build`**，改用官方推薦、較成熟穩定的
> [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare)
> (`@opennextjs/cloudflare`) 做轉換部署。開發時用的是原生 `next dev`，
> 跟平常寫 Next.js 完全一樣，只有部署那一刻才會經過 OpenNext 轉換成 Worker
> 相容格式。

## 我做了哪些修改

1. **`package.json`**
   - 拿掉 `vinext` 相關套件（`vinext`, `vite`, `@vitejs/plugin-rsc`,
     `@cloudflare/vite-plugin`, `react-server-dom-webpack` 等）
   - 新增 `@opennextjs/cloudflare`、`wrangler`
   - scripts 改回標準 Next.js 指令：
     - `dev` → `next dev`
     - `build` → `next build`
     - `start` → `next start`
     - `preview` → 用 OpenNext 建置後在本機模擬 Workers runtime 預覽
     - `deploy` → 用 OpenNext 建置後直接部署到 Cloudflare
     - `cf-typegen` → 產生 Cloudflare 環境變數的 TypeScript 型別
   - `next` 15 → `^16.0.0`，`react` / `react-dom` 18 → `^19.2.6`
   - `eslint` 8 → `^9.0.0`（`eslint-config-next` 16 需要）
   - `react-slick` 0.29 → `^0.31.0`（原版不支援 React 19）
   - 移除 `react-scroll-up`（不支援 React 19）

2. **`components/elements/backToTop.tsx`**
   把 `react-scroll-up` 改寫成原生 React 實作，行為完全相同。

3. **新增 `next.config.ts`**
   標準 Next.js 設定檔，只在 `next dev` 開發模式下初始化 OpenNext 的
   Cloudflare 本地綁定（`initOpenNextCloudflareForDev`），不影響正式建置。

4. **新增 `open-next.config.ts`**
   OpenNext 轉換設定，目前用預設值即可。

5. **新增 `wrangler.jsonc`**
   Cloudflare Workers 部署設定，`main` 指向 OpenNext 產生的
   `.open-next/worker.js`，靜態資源指向 `.open-next/assets`。
   **記得填入你自己的 `account_id`**（取消該行前面的 `//` 註解）。

6. **`public/assets/css/vendor/slicknav.css`**
   把一行舊版 IE6/7 的 hack 語法 `*zoom:1;` 改成標準的 `zoom:1;`——
   新版 CSS 解析器（Turbopack）不接受這種舊語法，但這個屬性本身在現代
   瀏覽器完全沒作用，拿掉星號不影響任何視覺效果。

## 驗證結果

在沙盒環境中實際執行並確認全部成功：
- `next build` ✅ 標準 Next.js 生產建置成功（21 條路由，含靜態與動態頁面）
- `opennextjs-cloudflare build` ✅ 成功產生 `.open-next/worker.js`
- `wrangler deploy --dry-run` ✅ 確認 7.7MB 靜態資源與 Worker 綁定設定正確，
  可以實際部署

## 部署步驟

```bash
# 1. 安裝套件
npm install

# 2. 本機開發（跟平常寫 Next.js 一樣，next dev）
npm run dev

# 3. 登入 Cloudflare（第一次執行）
npx wrangler login

# 4. 在 wrangler.jsonc 填入你的 account_id
#    （或執行 npx wrangler whoami 查詢帳號 ID）

# 5.（可選）先在本機模擬 Workers runtime 預覽
npm run preview

# 6. 建置 + 部署到 Cloudflare Workers
npm run deploy
```

## Git 整合注意事項（Cloudflare Workers Builds）

如果你把這個專案接上 Cloudflare 的 Git 整合自動建置部署，去 Worker 的
Settings → Builds → Connect，選擇這個 repo 跟你實際使用的分支
（例如 `master`）。Cloudflare 會偵測到 `wrangler.jsonc`，若沒有自動帶對
建置/部署指令，手動填入：

- **Build command**：`npm run build`
- **Deploy command**：`npx opennextjs-cloudflare build && npx opennextjs-cloudflare deploy`

連上後，之後每次 `git push` 都會自動觸發重新建置部署。

## 部署方式：Worker，不是 Pages

這個專案用了 App Router、動態路由（`/blog/[id]` 等），OpenNext 會把 SSR
邏輯打包成 Worker 執行，所以部署出來的是 **Cloudflare Worker**，不是純
靜態的 Pages。

## 已知限制

- 如果之後想加 `next/image`，OpenNext 支援透過 Cloudflare Images 或
  自訂 loader 處理圖片最佳化，需要額外設定，細節請參考
  [OpenNext 文件](https://opennext.js.org/cloudflare)。
- 若使用 Node.js 原生模組（如 `fs` 讀寫檔案）在 route handler 中，要確認
  該邏輯只在建置時執行（例如標成 `force-static`），因為 Workers runtime
  沒有真實檔案系統。目前範本沒有這類程式碼，不受影響。
