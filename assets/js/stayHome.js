class StayHome {
    constructor(value) {
        this.value = value;
        this.food = {
            photo: null,
            name: null,
            description: null
        }
        this.dinner = [];
        this.ingredients = {};
        this.getDataByName=this.getDataByName.bind(this);
        //this.getDataByIngredient = this.getDataByIngredient.bind(this);
        this.handleGetDataSuccess = this.handleGetDataSuccess.bind(this);
    }

    getDataByName(value) {
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

        var results = $('<div>').html("<h1>Results<h1>");
        var meal = null;
        var image = null;
        for(var recipe = 0; recipe < response["meals"].length; recipe++){
                meal = $("<div>").text(response["meals"][recipe]["strMeal"]);
                image = $("<img>").attr({
                    src: response["meals"][recipe]["strMealThumb"],
                    alt: response["meals"][recipe]["strMeal"],
                    width: 250,
                    height: 165.75,
                });

                results.append(meal, image);
                console.log("meal added");
        }
        results.addClass("responseContainer");
        $('.modal').append(results).toggleClass('hide');

    }
}