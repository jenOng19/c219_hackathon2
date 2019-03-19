$(document).ready( startApp );

var search;

function startApp(){
    search= new SearchCategory({
        search: $('#searchBar'),
        homeButton: $('.homeButton'),
        outsideButton: $('.outsideButton'),
    });
    $('#close').click(showHideModal);
    search.addEventHandlers();
	
}


function showHideModal(){
    $('.modal').toggleClass('hide');
    $("#searchBar").val("");
}

