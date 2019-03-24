class SearchCategory{
    constructor(elements){
        this.domElements=elements;

        this.searchMode='out';

        this.handleRecipeAndYelpButton=this.handleRecipeAndYelpButton.bind(this);
        this.handleFoodSearchBar=this.handleFoodSearchBar.bind(this);
        this.handleDrinkSearchBar=this.handleDrinkSearchBar.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
        this.handleSearchMode=this.handleSearchMode.bind(this);
    }

    addEventHandlers(){
        $('#recipeButton').click(this.handleRecipeAndYelpButton);
        $('#yelpButton').click(this.handleRecipeAndYelpButton);
        $('#recipeButton').click(this.handleSearchMode);
        $('#foodSearchBar').click(this.handleFoodSearchBar);
        $('#drinkSearchBar').click(this.handleDrinkSearchBar);
        $('#searchButton').click(this.handleSearch);
		
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

    handleSearchMode(){
        this.searchMode='home';
    }
}