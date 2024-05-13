import { fetchCats, fetchBreeds } from "./api.js";
import {
  renderCats,
  addDropListener,
  addCloseDropdownListener,
  renderOptions,
  clearImages,
  addSelectOrderListener,
  addLoadMoreButtonListener,
  enableLoadMoreButton,
  disableLoadMoreButton,
  addDrawerCloseListener,
} from "./dom.js";

const catList = [];
const pagesize = 12;
let page = 1;
let order = "DESC";
let selectOptions = [];
async function loadCats(limit, page, order, breedIds = []) {
  // 從api抓貓的資料
  let list = await fetchCats(limit, page, order, breedIds);

  //   console.log(list);
  //   等同於
  //   let list;
  //   fetchCats.then((data) => (list = data));
  catList.push(...list);

  //   console.log(catList);
  renderCats(list);

  if (list.length < limit) {
    //no more cat...
    disableLoadMoreButton();
    return false;
  }
  return true;
}

async function handleBreedOptionChange(event) {
  // TODO

  const changedOption = event.target;
  console.log("checked");
  if (changedOption.checked) {
    selectOptions.push(changedOption.value);
  } else {
    selectOptions = selectOptions.filter(
      (item) => item !== changedOption.value
    );
  }
  clearImages();
  //過濾條件改變 => 重新啟用loadmoreButton,並將page 還原預設值1
  enableLoadMoreButton();
  page = 1;
  const hasNextPage = await loadCats(pagesize, page, order, selectOptions);
  if (hasNextPage) {
    page++;
  }
}

async function loadBreedOptions() {
  const breeds = await fetchBreeds();
  //handleBreedOptionChange:當打勾選項時,要做事情
  renderOptions(breeds, handleBreedOptionChange);
}

function addListeners() {
  addDropListener();
  addCloseDropdownListener();
  addDrawerCloseListener();
  addSelectOrderListener(async (e) => {
    order = e.target.value;

    clearImages();
    //更改順序,重新啟用loadmoreButton,page設預設值 1
    enableLoadMoreButton();
    page = 1;
    const hasNextPage = await loadCats(pagesize, page, order, selectOptions);
    if (hasNextPage) {
      page++;
    }
  });
  addLoadMoreButtonListener(async () => {
    const hasNextPage = await loadCats(pagesize, page, order, selectOptions);
    if (hasNextPage) {
      page++;
    }
  });
}
document.addEventListener("DOMContentLoaded", async () => {
  await loadBreedOptions();
  const hasNextPage = await loadCats(pagesize, page, order, selectOptions);
  if (hasNextPage) {
    page++;
  }
  addListeners();
});
