class SearchCategory{
    constructor(elements){
        this.domElements=elements;

        this.searchMode='out';

        this.handleRecipeAndYelpButton=this.handleRecipeAndYelpButton.bind(this);
        this.handleFoodSearchBar=this.handleFoodSearchBar.bind(this);
        this.handleDrinkSearchBar=this.handleDrinkSearchBar.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
        // this.handleYelpButton=this.handleYelpButton.bind(this);
        // this.handleSearchBar=this.handleSearchBar.bind(this);
        // this.handleHomeButton=this.handleHomeButton.bind(this);
        // this.handleOutsideButton=this.handleOutsideButton.bind(this);
        // this.handleDrinkLink=this.handleDrinkLink.bind(this);
    }

    addEventHandlers(){
        $('#recipeButton').click(this.handleRecipeAndYelpButton);
        $('#yelpButton').click(this.handleRecipeAndYelpButton);

        $('#foodSearchBar').click(this.handleFoodSearchBar);
        $('#drinkSearchBar').click(this.handleDrinkSearchBar);
        $('#searchButton').click(this.handleSearch);
		// $('#searchBar').click(this.handleSearchBar);
        // $('.homeButton').click(this.handleHomeButton);
        // $('.outsideButton').click(this.handleOutsideButton); 
        // $('.drinksLink').click(this.handleDrinkLink);
    }

    handleRecipeAndYelpButton(){
        $('.input').toggleClass('hide');
        $('.main').toggleClass('hide');
    }

    handleFoodSearchBar(){
        var userInput=this.domElements.foodInput.val();
        return userInput;
    }

    handleDrinkSearchBar(){
        var userInput=this.domElements.drinkInput.val();
        return userInput;
    }
    
    handleSearch(){
        var foodValue=this.handleFoodSearchBar();
        var drinkValue=this.handleDrinkSearchBar();
        if(this.searchMode==='out'){
            var callYelp= new Yelp(foodValue, drinkValue);
            callYelp.handleGetData();
        }else{
            if(!drinkValue){
                var homeFood = new StayHome(foodValue);
                homeFood.getDataByName();
            }else if(!foodValue){
                var drinks= new Cocktails(drinkValue);
            }
        }
    }

    //====================================================================================================
    // Gets value that was inputed in the search bar and returns the value wherever the function is called
    //====================================================================================================

    // handleSearchBar(){
    //     var userInput=this.domElements.search.val();
    //     return userInput;
    // }

    //===================================================================================================
    // Calls handleSearchBar and passes its value into the Meal DB call
    //===================================================================================================

    handleHomeButton(){
        debugger;
        var value=this.handleSearchBar();
        if(this.searchMode==='drinks'){
            var cocktails = new Cocktails(value);
            cocktails.getCocktailByName();
            // var beer = new Beer(value);
            // beer.getBeerValue();
        }else if(this.searchMode==='food'){
            var stayHome = new StayHome(value);
            stayHome.getDataByName();
        }
    }

    //===================================================================================================
    // Calls handleSearchBar and passes its value into the Yelp call
    //===================================================================================================

    // handleOutsideButton(){
    //     var holdValue=this.handleSearchBar();
    //     var callYelp= new Yelp(holdValue);
    //     callYelp.handleGetData();
    // }

    handleSearchMode(){
        this.searchMode='home';
    }
}