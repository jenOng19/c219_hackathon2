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
        for (var tile = 0; tile <= 5; tile++) {
            $('.result'+tile).empty();
        }
        this.infoTiles = [];
        for (var dish = 0; dish <= 1; dish++) {
            //pull all the desired response values for current biz and store in variables
            //create dom elements using the response values
            var results = $('<div>').css({
                'textAlign': 'center',
                'margin': '2%',
                'height': '70%',
                'border': '3px ridge #ADCCD8',
                'border-radius': '14px'
            });
            var meal = $('<h1>').text(response["meals"][dish]["strMeal"]).css({
                display: "inline"
            });
            var cuisine = $('<h3>').text(response["meals"][dish]["strArea"]);
            var category = $('<div>').text("Category :"+response["meals"][dish]["strCategory"]);
            var tags = $('<div>').text("Other users tagged this recipe as: "+response["meals"][dish]["strTags"]);
            /* var counter = 1;
            response["meals"][0]["strIngredient"+counter]
            response["meals"][0]["strMeasure"+counter]*/
            var pic = $("<img>").attr({
                src: response["meals"][dish]["strMealThumb"],
                alt: response["meals"][dish]["strMeal"],
                /*width: 375,*/
                height: '50%',
                width: '65%',
                recipeNum: dish,
            }).css({
                'float': "left",
                'position': "relative",
                'border': '8px ridge #ADCCD8',
                'border-radius': '14px'
            }).on('click', this.grabIngredients);
            var vidLink = $("<a>").attr({href: response["meals"][dish]["strYoutube"]}).append(pic);
            var instructions =$('<div>').text(response["meals"][0]["strInstructions"]).css({
                width: "90%",
                left: "1%",
                position: "relative",
                textAlign: "justify"
            });
            results.append(meal, vidLink, cuisine, instructions, category);
            this.infoTiles.push(results);
        }
        for (var tile = 0; tile <= this.infoTiles.length-1; tile++) {
            $('.result'+tile).append(this.infoTiles[tile]);
        }
        //empties the array of result tiles to prepare for next time the method is called to do work again
        this.infoTiles.length = 0;

        if($('#apiResponseCarousel').find('.hide')) {
            $('#apiResponseCarousel').removeClass('hide');
        }
        $('.input').css({
            height: "15vh"
            /*justifyContent: "flex-end",*/
        });

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