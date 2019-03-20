class SearchCategory{
    constructor(elements){
        this.domElements=elements;

        this.handleSearchBar=this.handleSearchBar.bind(this);
        this.handleHomeButton=this.handleHomeButton.bind(this);
        this.handleOutsideButton=this.handleOutsideButton.bind(this);
    }

    addEventHandlers(){
		$('#searchBar').click(this.handleSearchBar);
        $('.homeButton').click(this.handleHomeButton);
        $('.outsideButton').click(this.handleOutsideButton); 
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
        var value=this.handleSearchBar();
        var stayHome = new StayHome(value);
        stayHome.getDataByName();
    }

    //===================================================================================================
    // Calls handleSearchBar and passes its value into the Yelp call
    //===================================================================================================

    handleOutsideButton(){
        var holdValue=this.handleSearchBar();
        var callYelp= new Yelp(holdValue);
        callYelp.handleGetData();
        callYelp.handleGetDataSuccess();

    }

}