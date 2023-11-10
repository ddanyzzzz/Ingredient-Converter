
function conversion () {

    let recipeDiameterInput = document.querySelector('#recipe-diameter-input');
    let personalDiameterInput = document.querySelector('#personal-diameter-input');
    let coefficientDisplay = document.querySelector('#coefficient');
    let output = document.querySelector('#output');
    let recipeQuantity = document.querySelector('#quantity-in-recipe');
    
    recipeDiameterInput.addEventListener("input", updateRecipeQuantity);
    personalDiameterInput.addEventListener("input", updateRecipeQuantity);
    recipeQuantity.addEventListener("input", updateRecipeQuantity);

    function updateRecipeQuantity() {

        let recipeDiameter = recipeDiameterInput.value;
        let personalDiameter = personalDiameterInput.value;
        let coefficient = ((personalDiameter * personalDiameter) / (recipeDiameter * recipeDiameter)).toFixed(1);
        coefficientDisplay.innerText = coefficient;

        let ingredient = recipeQuantity.value;
        output.innerText = Math.round(ingredient * coefficient).toFixed(1) + "g";
        console.log(coefficient);

    }
}

conversion ();
