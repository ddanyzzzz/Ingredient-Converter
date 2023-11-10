
function conversion () {

    let recipeDiameterInput = document.querySelector('#recipe-diameter-input');
    let personalLengthInput = document.querySelector('#personal-length-input');
    let personalWidthInput = document.querySelector('#personal-width-input');
    let coefficientDisplay = document.querySelector('#coefficient');
    let output = document.querySelector('#output');
    let recipeQuantity = document.querySelector('#quantity-in-recipe');
    
    recipeDiameterInput.addEventListener("input", updateRecipeQuantity);
    personalLengthInput.addEventListener("input", updateRecipeQuantity);
    personalWidthInput.addEventListener("input", updateRecipeQuantity);
    recipeQuantity.addEventListener("input", updateRecipeQuantity);

    function updateRecipeQuantity() {

        let recipeDiameter = recipeDiameterInput.value;
        let personalLength = personalLengthInput.value;
        let personalWidth = personalWidthInput.value;


        let coefficient = (((recipeDiameter / 2) * (recipeDiameter / 2) * Math.PI) / (personalLength * personalWidth)).toFixed(1);



        coefficientDisplay.innerText = coefficient;

        let ingredient = recipeQuantity.value;
        output.innerText = (ingredient * coefficient).toFixed(1) + "g";
        console.log(coefficient);

    }
}

conversion ();
