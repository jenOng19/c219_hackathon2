$(document).ready( startApp );

var search;

function startApp(){
    search= new SearchCategory({
        search: $('#searchBar'),
        // searchButton: $('#searchButton'),
        homeButton: $('.homeButton'),
        outsideButton: $('.outsideButton'),
    });
    search.addEventHandlers();
	// search.handleGetData();
}