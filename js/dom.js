import { createCard } from "./createElement.js";
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
    const card = createCard(item);
    columns[col].appendChild(card);
  }
}
