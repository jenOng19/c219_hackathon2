class Cocktails{
    constructor(value){
        this.value = value;
        this.cocktails = {};
        this.dinner = [];
        this.ingredients = [];
        this.getCocktailByName=this.getCocktailByName.bind(this);
        this.handleGetDataSuccess = this.handleGetDataSuccess.bind(this);
        this.grabIngredients = this.grabIngredients.bind(this);
    }

    getCocktailByName(value){
        // debugger;
        value = this.value;
        var ajaxConfig = {
            async: true,
            crossDomain: true,
            url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ value,
            dataType: 'json',
            method: 'get',
            success: 
            this.handleGetDataSuccess(),
        };
        $.ajax(ajaxConfig);
    }
    handleGetDataSuccess(response){
        console.log("cocktails!")
        var results = $('<div>').html("<h1>Results<h1>");
        var drinks = null;
        var image = null;
        debugger;
        for(var cockTailIndex = 0; cockTailIndex < response["drinks"].length; recipe++){
                drinks = $("<div>").text(response["drinks"][cockTailIndex]["strDrink"]);
                image = $("<img>").attr({
                    src: response["drinks"][cockTailIndex]["strDrinkThumb"],
                    alt: response["drinks"][cockTailIndex]["strDrink"],
                    recipeNum: cockTailIndex,
                    width: 250,
                    height: 165.75,
                });
                var image2 = image.on('click', this.grabIngredients);
                results.append(drinks, image2);
                console.log("meal added");
        }
        this.dinner = response;
        console.log(this.dinner);
        results.addClass("responseContainer");
        $('.modal').append(results).toggleClass('hide');

    }

    // grabIngredients(response){
    //     var clickedrecipeNum = $(event.currentTarget).attr('recipeNum');
    //         var dinner = this.dinner.meals[parseInt(clickedrecipeNum)];
    //         var ingredientNames = [];
    //         var measurementValues = [];
    //         for (var recipeKey in dinner) {
    //             var recipeValue = dinner[recipeKey];

    //             if (!recipeValue) {
    //                 continue;
    //             }

    //             if (recipeKey.includes('Ingredient')) {
    //                 ingredientNames.push(recipeValue);
    //             } else if (recipeKey.includes('Measure')) {
    //                 measurementValues.push(recipeValue);
    //             }
    //         }

    //         var totalIngredients = [];
    //         for (var i = 0; i < ingredientNames.length; i++) {
    //             var singleIngredient = {};
    //             singleIngredient.name = ingredientNames[i];
    //             singleIngredient.measurement = measurementValues[i];
    //             totalIngredients.push(singleIngredient);
    //             this.ingredients = totalIngredients;
    //         }
    //         console.log(this.ingredients);
    //         console.log("total ingredients for our recipe ", totalIngredients);
    //         // renderTotalIngredients();
        
    // }
    // renderTotalIngredients(totalIngredients){
    //     var ingredients = this.ingredients;
    //     console.log(this.ingredients);
    // }
}