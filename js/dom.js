import {
  createCard,
  createBreedOption,
  createTempItem,
  createStatsItem,
} from "./createElement.js";
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
    card.addEventListener("click", (e) => {
      setDrawerContent(item);
      openDrawer();
    });

    columns[col].appendChild(card);
  }
}

export function openDrawer() {
  const drawer = document.getElementById("drawer");
  drawer.classList.add("open");
}

export function addDrawerCloseListener() {
  document.addEventListener("click", (e) => {
    const drawer = document.getElementById("drawer");
    const isClickedInsideCard = e.target.closest(".card");
    console.log(isClickedInsideCard);
    const isClickedInsideDrawer = drawer.contains(e.target);

    if (!isClickedInsideCard && !isClickedInsideDrawer) {
      drawer.classList.remove("open");
    }
  });
}

export function setDrawerContent(item) {
  const drawer = document.getElementById("drawer");
  const drawerImg = document.getElementById("drawer-image");

  drawerImg.src = item.url;
  console.log(item);
  const breedName = document.getElementById("drawer-breed-name");
  breedName.textContent = item.breeds[0].name;

  const origin = document.getElementById("drawer__origin-text");
  origin.textContent = item.breeds[0].origin;

  const lifeSpan = document.getElementById("drawer-lifespan");
  lifeSpan.textContent = item.breeds[0].life_span;

  const weight = document.getElementById("drawer-weight");
  weight.textContent = item.breeds[0].weight.metric;

  const temperament = document.getElementById("temperament");
  temperament.innerHTML = "";
  const temperamentList = item.breeds[0].temperament.split(", ");
  for (const temp of temperamentList) {
    const tempItem = createTempItem(temp);
    temperament.appendChild(tempItem);
  }

  const stats = document.getElementById("drawer-stats");
  stats.innerHTML = "";
  const scoreListings = [
    {
      key: "intelligence",
      displayName: "智力",
    },
    {
      key: "affection_level",
      displayName: "親密度",
    },
    {
      key: "energy_level",
      displayName: "活力",
    },
    {
      key: "child_friendly",
      displayName: "兒童友善",
    },
    {
      key: "dog_friendly",
      displayName: "親近狗狗",
    },
    {
      key: "indoor",
      displayName: "喜歡在家",
    },
    {
      key: "health_issues",
      displayName: "遺傳疾病",
    },
    {
      key: "shedding_level",
      displayName: "掉毛量",
    },
    {
      key: "social_needs",
      displayName: "社交需求",
    },
    {
      key: "stranger_friendly",
      displayName: "陌生人友善",
    },
    {
      key: "rare",
      displayName: "稀有度",
    },
  ];

  for (const { key, displayName } of scoreListings) {
    const StatsItem = createStatsItem(displayName, item.breeds[0][key]);
    stats.appendChild(StatsItem);
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
