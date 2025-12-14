const KEY = "dessert_favorites";
function getFavorites() {
return JSON.parse(localStorage.getItem(KEY)) || [];
}

function saveFavorites(favs) {
localStorage.setItem(KEY, JSON.stringify(favs));
}

function toggleFavorite(recipe) {
let favs = getFavorites();
const index = favs.findIndex(r => r.id === recipe.id);

if (index === -1) {
favs.push(recipe);
 } else {
favs.splice(index, 1);
}

saveFavorites(favs);
}

function isFavorite(id) {
return getFavorites().some(r => r.id === id);
}

 document.addEventListener("DOMContentLoaded", () => {
 document.querySelectorAll(".fav-btn").forEach(btn => {
 const id = btn.dataset.id;

 if (isFavorite(id)) {
  btn.textContent = "★ Saved";
 }

 btn.addEventListener("click", (e) => {
 e.preventDefault();

 toggleFavorite({
  id: id,
  name: btn.dataset.name,
  url: btn.dataset.url,
  img: btn.dataset.img
 });

 btn.textContent = isFavorite(id) ? "★ Saved" : "☆ Save";
 });
 });

 const list = document.getElementById("favoritesList");
 if (!list) return;

 const favs = getFavorites();

 if (favs.length === 0) {
 list.innerHTML = "<p>No saved recipes yet.</p>";
 return;
 }

 favs.forEach(r => {
 list.innerHTML += `
 <div class="recipe-card">
 <a href="${r.url}">
 <img src="${r.img}" alt="${r.name}">
 <p>${r.name}</p>
 </a>
 </div>
 `;
 });
 });