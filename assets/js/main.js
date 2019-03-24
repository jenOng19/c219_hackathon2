$(document).ready( startApp );

var search;

function startApp(){
    search= new SearchCategory({
        recipeButton:$('#recipeButton'),
        yelpButton:$('#yelpButton'),
        foodInput: $('#foodSearchBar'),
        drinkInput: $('#drinkSearchBar'),
        // homeButton: $('.homeButton'),
        // outsideButton: $('.outsideButton'),
    });
    search.addEventHandlers();
}

