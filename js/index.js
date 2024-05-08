import { fetchCats } from "./api.js";
import { renderCats } from "./dom.js";

const catList = [];
let page = 1;
let order = "DESC";
let selectOptions = [];
let limit = 5;
async function loadCats(limit, page, order, breedIds = []) {
  // 從api抓貓的資料
  let list = await fetchCats(limit, page, order, breedIds);

  //   console.log(list);
  //   等同於
  //   let list;
  //   fetchCats.then((data) => (list = data));
  catList.push(...list);

  console.log(catList);
  renderCats(list);
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadCats(limit, page, order, selectOptions);
});
