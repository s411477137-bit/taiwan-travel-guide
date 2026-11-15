const placeGrid = document.querySelector("#placeGrid");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const emptyMessage = document.querySelector("#emptyMessage");
const dialog = document.querySelector("#placeDialog");
const dialogContent = document.querySelector("#dialogContent");
let selectedRegion = "全部";

function renderPlaces() {
  const keyword = searchInput.value.trim().toLowerCase();
  const filteredPlaces = places.filter((place) => {
    const matchesRegion = selectedRegion === "全部" || place.region === selectedRegion;
    const searchableText = `${place.name} ${place.city} ${place.category} ${place.description}`.toLowerCase();
    return matchesRegion && searchableText.includes(keyword);
  });

  resultCount.textContent = `共 ${filteredPlaces.length} 個景點`;
  emptyMessage.hidden = filteredPlaces.length !== 0;

  placeGrid.innerHTML = filteredPlaces.map((place) => `
    <article class="place-card">
      <button class="card-image-button" data-place-id="${place.id}" aria-label="查看${place.name}介紹">
        <img src="${place.image}" alt="${place.imageAlt}" loading="lazy">
        <span class="region-tag">${place.region}</span>
      </button>
      <div class="card-content">
        <p class="card-meta">${place.city}　·　${place.category}</p>
        <h3>${place.name}</h3>
        <p class="card-description">${place.description}</p>
        <button class="text-link" data-place-id="${place.id}">閱讀景點介紹 <span>→</span></button>
      </div>
    </article>
  `).join("");
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedRegion = button.dataset.region;
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderPlaces();
  });
});

searchInput.addEventListener("input", renderPlaces);

placeGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-place-id]");
  if (!button) return;

  const place = places.find((item) => item.id === button.dataset.placeId);
  if (!place) return;

  dialogContent.innerHTML = `
    <img class="dialog-image" src="${place.image}" alt="${place.imageAlt}">
    <p class="eyebrow">${place.region} · ${place.city} · ${place.category}</p>
    <h2>${place.name}</h2>
    <p>${place.description}</p>
    <div class="travel-tip"><strong>小旅行提醒</strong><br>${place.tip}</div>
  `;
  dialog.showModal();
});

document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

renderPlaces();
