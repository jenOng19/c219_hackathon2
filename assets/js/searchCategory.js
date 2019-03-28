class SearchCategory{
    constructor(elements){
        this.domElements=elements;

        this.searchMode='out';

        this.handleRecipeAndYelpButton=this.handleRecipeAndYelpButton.bind(this);
        this.handleFoodSearchBar=this.handleFoodSearchBar.bind(this);
        this.handleDrinkSearchBar=this.handleDrinkSearchBar.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
        this.handleSearchMode=this.handleSearchMode.bind(this);
        this.handleYelpButton=this.handleYelpButton.bind(this);
    }

    addEventHandlers(){
        $('#recipeButton').click(this.handleRecipeAndYelpButton);
        $('#recipeButton').click(this.handleSearchMode);
        $('#yelpButton').click(this.handleRecipeAndYelpButton);
        $('#yelpButton').click(this.handleYelpButton);
        $('#foodSearchBar').click(this.handleFoodSearchBar);
        $('#drinkSearchBar').click(this.handleDrinkSearchBar);
        $('#searchButton').click(this.handleSearch);
    }

    handleYelpButton(){
        $('.drinkHidden').toggleClass('hide');
    }
    //=============================================================================================================
    // When either "Eat Out" or "Cook" button are clicked, the main page will hide and the search page will appear
    //=============================================================================================================

    handleRecipeAndYelpButton(){
        $('.input').toggleClass('hide');
        $('.main').toggleClass('hide');
    }

    //=============================================================================================================
    // Gets the value inputed into the food search bar and returns that value wherever the function is called
    //=============================================================================================================

    handleFoodSearchBar(){
        var userInput=this.domElements.foodInput.val();
        return userInput;
    }

    //=============================================================================================================
    // Gets the value inputed into the drink search bar and returns that value wherever the function is called
    //=============================================================================================================

    handleDrinkSearchBar(){
        var userInput=this.domElements.drinkInput.val();
        return userInput;
    }

    //=============================================================================================================
    // Gets the value inputed into the food and drink search bar,
    // Checks if user clicked on "Go out" or "Cook at Home",
    // If search mode is "out", food and drink values will be passed into Yelp call,
    // If search mode is "home", check if:
    // No drink value= pass in food value to mealDB to get recipes
    // No food value= pass in drink value to cocktails and beer database to get recipes
    //=============================================================================================================
    
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
                var cocktails= new Cocktails(drinkValue);
                var beer= new Beer(drinkValue);
                cocktails.getCocktailByName();
                beer.getBeerValue();
            }else if( foodValue && drinkValue){
                var stayHome= new StayHome(foodValue);
                var cocktails= new Cocktails(drinkValue);
                var beer= new Beer(drinkValue);
                stayHome.getDataByName();
                cocktails.getCocktailByName();
                beer.getBeerValue();
            }
        }
    }

    //=============================================================================================================
    // When "cook" button is clicked, handleSearchMode will be called and searchMode will swith to "home"
    //=============================================================================================================

    handleSearchMode(){
        this.searchMode='home';
    }
}