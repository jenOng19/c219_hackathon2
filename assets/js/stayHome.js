class StayHome {
    constructor(value) {
        this.value = value;
        this.food = {};
        this.dinner = {};
        this.ingredients = {};
        this.getDataByName=this.getDataByName.bind(this);
        this.handleGetDataSuccess = this.handleGetDataSuccess.bind(this);
        this.grabIngredients = this.grabIngredients.bind(this);
    }
    //===============================================================================
    // Ajax call to get data from MealDB
    //===============================================================================

    getDataByName(value){
        value = this.value;
        var ajaxConfig = {
            async: true,
            crossDomain: true,
            url: 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + value,
            dataType: 'json',
            method: 'get',
            success: this.handleGetDataSuccess,
        };
        $.ajax(ajaxConfig);
    }
    handleGetDataSuccess(response){
        console.log("StayHome handleGetDataSuccess called");
        console.log(response);

        var meal = response["meals"][0]["strMeal"];
        var mealTwo = response["meals"][1]["strMeal"];
        //var mealThree = response["meals"][2]["strMeal"];

        var image = $("<img>").attr({
            src: response["meals"][0]["strMealThumb"],
            alt: response["meals"][0]["strMeal"],
            width: 250,
            height: 165.75,
        });
        var imageTwo = $("<img>").attr({
            src: response["meals"][1]["strMealThumb"],
            alt: response["meals"][1]["strMeal"],
            width: 250,
            height: 165.75,
        });

       /* var imageThree = $("<img>").attr({
            src: response["meals"][2]["strMealThumb"],
            alt: response["meals"][2]["strMeal"],
            width: 250,
            height: 165.75,
        });*/

        var results = $('<div>').addClass("responseContainer").append(meal, image);
        var resultsTwo = $('<div>').addClass("responseContainer").append(mealTwo, imageTwo);
        //var resultsThree = $('<div>').addClass("responseContainer").append(mealThree, imageThree);
        /*for(var recipe = 0; recipe < response["meals"].length; recipe++){
                meal = $("<div>").text(response["meals"][recipe]["strMeal"]);
                image = $("<img>").attr({
                    src: response["meals"][recipe]["strMealThumb"],
                    alt: response["meals"][recipe]["strMeal"],
                    recipeNum: recipe,
                    width: 250,
                    height: 165.75,
                });
                //var image2 = image.on('click', this.grabIngredients);
                results.append(meal);
                console.log("meal added");

        }*/
        //results.addClass("responseContainer");

        $('.modal').toggleClass('hide');
        $('.slide1').append(results);
        $('.slide2').append(resultsTwo);
        //$('.slide3').append(resultsThree);



        /*this.dinner = response;
        console.log(this.dinner);
        results.addClass("responseContainer");
        $('.modal').append(results).toggleClass('hide');*/
        console.log(this.grabIngredients(response));
    }

    //===============================================================================
    // callback to provide individual ingredients for selected food
    //===============================================================================
    grabIngredients(response){
        var clickedrecipeNum = $(event.currentTarget).attr('recipeNum');
            var dinner = this.dinner.meals[parseInt(clickedrecipeNum)];
            var ingredientNames = [];
            var measurementValues = [];
            for (var recipeKey in dinner) {
                var recipeValue = dinner[recipeKey];

                if (!recipeValue) {
                    continue;
                }

                if (recipeKey.includes('Ingredient')) {
                    ingredientNames.push(recipeValue);
                } else if (recipeKey.includes('Measure')) {
                    measurementValues.push(recipeValue);
                }

                console.log(this.ingredients);
                console.log("total ingredients for our recipe ", totalIngredients);
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
//===============================================================================
// render to dom
//===============================================================================

    renderTotalIngredients(totalIngredients){
        var ingredients = this.ingredients;
        console.log(this.ingredients);
    }

}