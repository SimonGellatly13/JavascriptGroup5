function scaleIngredients() {
    // Get the selected scale value 
    const scale = document.getElementById("scale").value;
  
    // find all ingredient amount elements on the page that we are scaling
    const ingredientAmounts = document.querySelectorAll(".amount");
  
    // looping through each amount
    ingredientAmounts.forEach(amount => {
  
      // geting the original amount from the data in recipe
      const baseAmount = parseFloat(amount.dataset.base);
  
      // calculate the new scaled amount
      const scaledAmount = baseAmount * scale;
  
      // if the scaled number is a whole number, display
      
      if (scaledAmount % 1 === 0) {
        amount.textContent = scaledAmount;
      } else {
        // if it has decimals keep it to two decimal places
        amount.textContent = scaledAmount.toFixed(2);
      }
    });
  }