## Git 整合注意事項（Cloudflare Workers Builds）

如果你把這個專案接上 Cloudflare 的 Git 整合自動建置部署，Cloudflare 可能會偵測到
repo 裡的 `wrangler.jsonc` 跟實際部署設定不一致（常見是 `name` 欄位對不上
Dashboard 上的專案名稱），並自動開一個 PR 幫你同步。

**處理方式：**
- 確認 `wrangler.jsonc` 裡的 `name` 跟 Cloudflare Dashboard 上顯示的 Worker
  名稱完全一致，改完後 commit + push：
```bash
  git add wrangler.jsonc
  git commit -m "Fix wrangler.jsonc worker name"
  git push
```
- 或者直接去 GitHub 合併 Cloudflare 自動開的那個同步 PR。

兩種做法都行，重點是本機（repo）跟 Cloudflare 上實際部署的設定要一致。

## 部署方式：Worker，不是 Pages

這個專案用了 App Router / RSC，vinext 會把 SSR 邏輯跑在 Workers runtime 上，
所以 `npm run deploy` 部署出來的是 **Worker**，不是靜態的 Pages。除非之後把
網站改成純靜態輸出（`next export`），否則不需要、也不應該改用 Pages。