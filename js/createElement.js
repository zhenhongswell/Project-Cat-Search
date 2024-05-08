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
