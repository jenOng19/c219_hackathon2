class SearchCategory{
    constructor(elements){
        this.domElements=elements;

        this.searchMode='food';

        this.handleSearchBar=this.handleSearchBar.bind(this);
        this.handleHomeButton=this.handleHomeButton.bind(this);
        this.handleOutsideButton=this.handleOutsideButton.bind(this);
        this.handleDrinkLink=this.handleDrinkLink.bind(this);
    }

    addEventHandlers(){
		$('#searchBar').click(this.handleSearchBar);
        $('.homeButton').click(this.handleHomeButton);
        $('.outsideButton').click(this.handleOutsideButton); 
        $('.drinksLink').click(this.handleDrinkLink);
    }

    //====================================================================================================
    // Gets value that was inputed in the search bar and returns the value wherever the function is called
    //====================================================================================================

    handleSearchBar(){
        var userInput=this.domElements.search.val();
        return userInput;
    }

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

    handleOutsideButton(){
        var holdValue=this.handleSearchBar();
        var callYelp= new Yelp(holdValue);
        callYelp.handleGetData();
    }

    handleDrinkLink(){
        this.searchMode='drinks';
    }
}