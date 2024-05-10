import { createCard, createBreedOption } from "./createElement.js";
export function renderCats(catList) {
  const imageGrid = document.querySelector(".image-grid");
  const columns = [
    imageGrid.querySelector("#col1"),
    imageGrid.querySelector("#col2"),
    imageGrid.querySelector("#col3"),
  ];
  for (let i = 0; i < catList.length; i++) {
    const col = i % columns.length;
    const item = catList[i];
    // console.log(item);
    const card = createCard(item);
    columns[col].appendChild(card);
  }
}

export function addCloseDropdownListener() {
  document.addEventListener("click", (e) => {
    const dropdownButton = document.getElementById("dropdown-button");
    const options = document.getElementById("options");
    // 查看是否點擊在option、dropdownButton中
    const isClickedInsideOptions = options.contains(e.target);
    const isClickedInsideDropdownButton = dropdownButton.contains(e.target);
    if (!isClickedInsideOptions && !isClickedInsideDropdownButton) {
      options.classList.add("hidden");
    }
  });
}

export function addDropListener() {
  const dropdownButton = document.getElementById("dropdown-button");
  const options = document.getElementById("options");

  dropdownButton.addEventListener("click", () => {
    options.classList.toggle("hidden");
  });
}

export function renderOptions(breeds, handleBreedOptionChange) {
  const optionsContainer = document.getElementById("options");
  // 先清空後,再創建
  optionsContainer.innerHTML = "";
  breeds.forEach((breed) => {
    const option = createBreedOption(breed, handleBreedOptionChange);

    optionsContainer.appendChild(option);
  });
}

export function clearImages() {
  const imageGrid = document.querySelector(".image-grid");
  const columns = [
    imageGrid.querySelector("#col1"),
    imageGrid.querySelector("#col2"),
    imageGrid.querySelector("#col3"),
  ];
  columns.forEach((column) => (column.innerHTML = ""));
}

export function addSelectOrderListener(handler) {
  const orderSelect = document.getElementById("order-select");
  orderSelect.addEventListener("change", handler);
}

export function addLoadMoreButtonListener(handler) {
  const loadMoreButton = document.getElementById("load-more");
  loadMoreButton.addEventListener("click", handler);
}

export function disableLoadMoreButton() {
  const loadMoreButton = document.getElementById("load-more");
  loadMoreButton.disabled = true;
}
export function enableLoadMoreButton() {
  const loadMoreButton = document.getElementById("load-more");
  loadMoreButton.disabled = false;
}
