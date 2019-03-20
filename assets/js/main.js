$(document).ready( startApp );

var search;

function startApp(){
    search= new SearchCategory({
        search: $('#searchBar'),
        homeButton: $('.homeButton'),
        outsideButton: $('.outsideButton'),
    });
    $('#close').click(showHideModal);
    $('#dropDownButton').click(dropDown);
    search.addEventHandlers();
    dropDown();
}

function showHideModal(){
    $('.modal').toggleClass('hide');
}

function dropDown(){
    $('.dropDownContent').toggleClass('hide');
}

