$(document).ready( startApp );

var search;
var stayHome;

//===================================================================================================
// onload, SearchCategory is instantiated with DOM elements
//===================================================================================================

function startApp(){
    search= new SearchCategory({
        recipeButton:$('#recipeButton'),
        yelpButton:$('#yelpButton'),
        foodInput: $('#foodSearchBar'),
        drinkInput: $('#drinkSearchBar'),
        searchButton: $('#searchButton'),
        closeButton: $('.button')
    });
    search.addEventHandlers();
}
