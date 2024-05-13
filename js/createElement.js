export function createCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");
  //create image
  const img = document.createElement("img");
  img.src = item.url;
  img.classList.add("card__img");
  //create breed text
  const breedsText = document.createElement("p");
  // console.log("item.breeds:", item.breeds);

  const breedName = item.breeds
    .map((breed) => {
      // console.log(breed);
      return breed.name;
    })
    .join(", ");
  // console.log(breedName);
  breedsText.textContent = breedName;
  card.appendChild(breedsText);
  card.appendChild(img);
  return card;
}

export function createBreedOption(breed, handleBreedOptionChange) {
  const option = document.createElement("div");
  option.className = "multi-select-dropdown__options__option";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = breed.id;
  checkbox.addEventListener("change", handleBreedOptionChange);

  const label = document.createElement("label");
  label.className = "multi-select-dropdown__label";
  label.textContent = breed.name;
  const br = document.createElement("br");

  option.appendChild(checkbox);
  option.appendChild(label);
  option.append(br);
  return option;
}

export function createTempItem(temperament) {
  // <span class="drawer__personality__tags__tag">Closely</span>
  const tempItem = document.createElement("span");
  tempItem.classList.add("drawer__personality__tags__tag");
  tempItem.textContent = temperament;
  return tempItem;
}

export function createStatsItem(displayName, score) {
  // <div class="drawer__stats__item">
  //         <p class="drawer__stats__item__title" id="intelligence">
  //           intelligence
  //         </p>
  //         <div class="drawer__stats__item__bar">
  //           <div class="drawer__stats__item__bar__fill"></div>
  //         </div>
  //       </div>
  const statsItem = document.createElement("div");
  statsItem.classList.add("drawer__stats__item");
  const statsItemTitle = document.createElement("p");
  statsItemTitle.classList.add("drawer__stats__item__title");
  statsItemTitle.id = displayName;
  statsItemTitle.textContent = `${displayName} :`;
  const statsItemBar = document.createElement("div");
  statsItemBar.classList.add("drawer__stats__item__bar");
  const statsItemBarFill = document.createElement("div");
  statsItemBarFill.classList.add("drawer__stats__item__bar__fill");
  // width 查看css
  statsItemBarFill.style.width = `${score * 20}%`;
  statsItemBar.appendChild(statsItemBarFill);

  statsItem.appendChild(statsItemTitle);
  statsItem.appendChild(statsItemBar);

  return statsItem;
}
