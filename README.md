# Project-Cat-Search

note:
-Ctrl+Shift+Alt + 方向鍵 Up/Down ：複製當前行 duplicate line -重新載入圖片,須 clearImage、enableLoadMoreButton、loadCats、page=1,執行 loadCat 後 page++(為了 loadmore).

loadBreedOptions:通過 Fetch Cat API（loadbreeds）後,產生 breed options,並在每個 option 的 checkbox change 時,根據 checkbox change 的動作執行 handler:重新 loadCats.
loadCats:fetch Cat API,抓取 Image,根據參數,過濾所抓取的圖片,再 renderCat 創建 img 在 DOM 中,回傳 True or False 用於判斷是否可以 loadmore.
addListeners:

- addDropListener:點擊 dropdown 會開啟或關閉,開啟後顯示 options,關閉後隱藏(hidden) options。
- addCloseDropdownListener:判斷點擊是否在 dropdown 或 options 中,若未在,則關閉 dropdown,反之,維持開啟狀態.
- addSelectOrderListener:排序,當選項 change 時會觸發,重新根據條件執行 loadCat. (p.s:重新載入圖片)
- addLoadMoreButtonListener:載入更多圖片,click 後執行 loadCats 並 page++.
