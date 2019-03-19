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
        this.handleGetData(value);
    }

    handleOutsideButton(){
        var holdValue=this.handleSearchBar();
        var callYelp= new Yelp(holdValue);
        callYelp.handleGetData
        // this.handleGetData(holdValue);
    }

    // handleGetData(value){
	// 	var ajaxConfig = {
    //         async: true,
    //         crossDomain: true,
    //         url: "http://danielpaschal.com/lfzproxies/yelpproxy.php",//?term=taco&location=irvine",
    //         data: {
    //             term: value,
    //             location: 'irvine',
    //         },
    //         method: "GET",
    //         headers: {
    //             apikey: "6nNnKyzCq0u6dHU-Ycir7C1yW7IAIO_WbX8Cw62pxosdj8Se4QJlmWIFgukCxLTkS3NtVxK3wZ8kwI-6iUyOuqm4TmL44pl29hOJRhzSBw6h5aF62wsfjxt3Z0KQXHYx",
    //             "cache-control": "no-cache",
    //         },
	// 		success: this.handleGetDataSuccess,
	// 	}
	// 	$.ajax(ajaxConfig);
	// }

	// handleGetDataSuccess(response) {
	// 	console.log("response:" ,response);
	// 	if(response.success){
	// 		for(var key= 0; key<response.businesses.length; key++){
				
	// 		}
	// 	}
	// }
}