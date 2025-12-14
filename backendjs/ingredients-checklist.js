// getting all ingredient list items
const ingredients = document.querySelectorAll('.ingredients-card li');


ingredients.forEach(item => {

  // when ingredient is clicked 
  item.addEventListener('click', function () {

    // checkmark will appear 
    item.classList.toggle('checked');

  });
});