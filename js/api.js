const apiKey =
  "live_SwyMIPFzfm9SDeOT7V0GvU8PstZ7UvqosRK3BFtq21WJxstRuPKaYHZdWZK7vugt";

export function fetchCats(limit, page, order, breedIds = []) {
  // 作用於篩選 (回傳一個promise)
  const url = new URL("https://api.thecatapi.com/v1/images/search");
  url.searchParams.append("limit", limit);
  url.searchParams.append("has_breeds", 1);
  url.searchParams.append("page", page);
  url.searchParams.append("order", order);
  url.searchParams.append("api_key", apiKey);

  if (breedIds.length > 0) {
    //（範例）breed_ids=beng,abys
    // Expected Input:['beng','abys']
    // Expected output:"beng,abys"
    url.searchParams.append("breed_ids", breedIds.join(","));
  }
  return fetch(url).then((res) => res.json());
}

export function fetchBreeds() {
  const url = new URL("https://api.thecatapi.com/v1/breeds");
  return fetch(url).then((res) => res.json());
}
