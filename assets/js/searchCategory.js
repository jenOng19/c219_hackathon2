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

    handleSearchBar(){
        var userInput=this.domElements.search.val();
        return userInput;
    }

    handleHomeButton(){
        var value=this.handleSearchBar();
        var stayHome = new StayHome(value);
        stayHome.getDataByName();
        // stayHome.getDataByIngredient();
    }

    handleOutsideButton(){
        var holdValue=this.handleSearchBar();
        var callYelp= new Yelp(holdValue);
        callYelp.handleGetData();
        callYelp.handleGetDataSuccess();

    }

}