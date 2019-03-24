$(document).ready( startApp );

var search;

function startApp(){
    search= new SearchCategory({
        recipeButton:$('#recipeButton'),
        yelpButton:$('#yelpButton'),
        foodInput: $('#foodSearchBar'),
        drinkInput: $('#drinkSearchBar'),
        searchButton: $('#searchButton'),
    });
    search.addEventHandlers();
}

