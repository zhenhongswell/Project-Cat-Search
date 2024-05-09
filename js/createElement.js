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
