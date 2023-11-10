
function conversion () {

    let recipeLengthInput = document.querySelector('#recipe-length-input');
    let recipeWidthInput = document.querySelector('#recipe-width-input');
    let personalLengthInput = document.querySelector('#personal-length-input');
    let personalWidthInput = document.querySelector('#personal-width-input');
    let coefficientDisplay = document.querySelector('#coefficient');
    let output = document.querySelector('#output');
    let recipeQuantity = document.querySelector('#quantity-in-recipe');
    
    recipeLengthInput.addEventListener("input", updateRecipeQuantity);
    recipeWidthInput.addEventListener("input", updateRecipeQuantity);
    personalLengthInput.addEventListener("input", updateRecipeQuantity);
    personalWidthInput.addEventListener("input", updateRecipeQuantity);
    recipeQuantity.addEventListener("input", updateRecipeQuantity);

    function updateRecipeQuantity() {

        let recipeLength = recipeLengthInput.value;
        let recipeWidth = recipeWidthInput.value;
        let personalLength = personalLengthInput.value;
        let personalWidth = personalWidthInput.value;


        let coefficient = ((personalLength * personalWidth) / (recipeLength * recipeWidth)).toFixed(1);



        coefficientDisplay.innerText = coefficient;

        let ingredient = recipeQuantity.value;
        output.innerText = (ingredient * coefficient).toFixed(1) + "g";
        console.log(coefficient);

    }
}

conversion ();
