class StayHome{
    constructor(value){
        this.value = value;
        this.food = {};
        this.dinner = [];
        this.ingredients = [];
        this.getDataByName=this.getDataByName.bind(this);
        // this.getDataByIngredient=this.getDataByIngredient.bind(this);
        
    }

    getDataByName(value){
        debugger;
        value = this.value;
        $.ajax({    
            async: true,
            crossDomain: true,
            url: 'https://www.themealdb.com/api/json/v1/1/search.php?s='+ value,
            dataType: 'json',
            method: 'get',
            success: function(result) {
                console.log(result);
            
                result = result.meals[0];
                var ingredientNames = [];
                var measurementValues = [];
                for (var recipeKey in result) {
                    var recipeValue = result[recipeKey];

                    if (!recipeValue) {
                        continue;
                    }

                    if (recipeKey.includes('Ingredient')) {
                        ingredientNames.push(recipeValue);
                    } else if (recipeKey.includes('Measure')) {
                        measurementValues.push(recipeValue);
                    }
                }

                var totalIngredients = [];
                for (var i = 0; i < ingredientNames.length; i++) {
                    var singleIngredient = {};
                    singleIngredient.name = ingredientNames[i];
                    singleIngredient.measurement = measurementValues[i];
                    totalIngredients.push(singleIngredient);
                    this.ingredients = totalIngredients;
                }
                console.log(this.ingredients);
                console.log("total ingredients for our recipe ", totalIngredients);
            }
        });
    }
}