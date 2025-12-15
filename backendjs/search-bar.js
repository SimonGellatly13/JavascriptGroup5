// getting the search input box
const searchInput = document.querySelector(".search-input");

// getting the div where the results will be 
const resultsContainer = document.querySelector(".search-results");

// Only run if input exists
if (searchInput && resultsContainer) {

  // fetching all recipes from json file
  let recipes = [];
  fetch('/JavascriptGroup5/backendjs/recipes.json')
    // converting json to an onject
    .then(res => res.json())
    // saving in variable called recipes
    .then(data => recipes = data)


  // will listen for typing from user
  searchInput.addEventListener('input', function () {

    // making it so user doesnt have to use proper case
    const query = this.value.toLowerCase();

    // will clear the search and stop when erased 
    resultsContainer.innerHTML = '';
    if (query.length === 0) return;

    // filtering to find recipes that match
    const filtered = recipes.filter(r => r.name.toLowerCase().includes(query));

    // Show matching recipes
    filtered.forEach(r => {
      //linking to recipe page
      const card = document.createElement('a');
      card.href = r.url;
      //styyling like card
      card.className = 'recipe-card';
      //using name from json file
      card.innerHTML = `
        <p>${r.name}</p>
      `;
      //adding results to page
      resultsContainer.appendChild(card);
    });
  });
}