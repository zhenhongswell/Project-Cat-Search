import { fetchCats, fetchBreeds } from "./api.js";
import {
  renderCats,
  addDropListener,
  addCloseDropdownListener,
  renderOptions,
  clearImages,
  addSelectOrderListener,
} from "./dom.js";

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

  //   console.log(catList);
  renderCats(list);
}

function handleBreedOptionChange(event) {
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
  loadCats(limit, page, order, selectOptions);
}

async function loadBreedOptions() {
  const breeds = await fetchBreeds();
  //handleBreedOptionChange:當打勾選項時,要做事情
  renderOptions(breeds, handleBreedOptionChange);
}

function addListeners() {
  addDropListener();
  addCloseDropdownListener();
  addSelectOrderListener((e) => {
    order = e.target.value;
    clearImages();
    loadCats(limit, page, order, selectOptions);
  });
}
document.addEventListener("DOMContentLoaded", async () => {
  await loadBreedOptions();
  await loadCats(limit, page, order, selectOptions);

  addListeners();
});
