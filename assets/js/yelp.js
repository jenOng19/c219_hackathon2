class Yelp{
    constructor(holdValue){
        this.value=holdValue;

        this.handleGetData=this.handleGetData.bind(this);
        this.handleGetDataSuccess=this.handleGetDataSuccess.bind(this);
    }

    //===================================================================================================
    // Ajax call to get data from Yelp
    //===================================================================================================

    handleGetData(value){
        value=this.value;
		var ajaxConfig = {
            async: true,
            crossDomain: true,
            dataType: "json",
            url: "assets/php/yelpproxy.php",//?term=taco&location=irvine",
            data: {
                term: value,
                location: 'irvine',
            },
            method: "GET",
            headers: {
                apikey: "6nNnKyzCq0u6dHU-Ycir7C1yW7IAIO_WbX8Cw62pxosdj8Se4QJlmWIFgukCxLTkS3NtVxK3wZ8kwI-6iUyOuqm4TmL44pl29hOJRhzSBw6h5aF62wsfjxt3Z0KQXHYx",
                "cache-control": "no-cache",
            },
			success: this.handleGetDataSuccess,
		};
		$.ajax(ajaxConfig);
    }
    
	handleGetDataSuccess(response) {
		console.log("response:" ,response);
        var results = $('<div>').html("<h1>Results<h1>");
        var name = $("<div>").text(response['name']);
        var image = $("<img>").attr({
            src: response['image_url'],
            alt: response['name']+" "+"photo",
            width: 250,
            height: 165.75,
        });
        var url = $("<div>").text(response['url']);
        var imageLink = $("<a>").attr({href: response['url']}).append(image);
        var phone = $("<div>").text(response['display_phone']);
        var reviews = $("<div>").text("Reviews: "+response['review_count']);
        var rating = $("<div>").text("Rating: "+response['rating']+" stars");
        var location = $("<div>").text(response['location']['display_address']);
        var price = $("<div>").text("Price: "+response['price']);

        results.addClass("responseContainer").append(name, imageLink, phone, reviews, rating, location, price);
        $('.modal').append(results).toggleClass('hide');




    //===================================================================================================
    // Appends/displays the data we receive from yelp to the DOM(modal)
    //===================================================================================================

	handleGetDataSuccess(response) {
		console.log("response:" ,response);
        var name=response['name'];
        var image=response['image_url'];
        var url=response['url'];
        var phone=response['display_phone'];
        var reviews=response['review_count'];
        var rating=response['rating'];
        var location=response['location']['display_address'];
        var price=response['price'];
        var div = $('<div>')
        $('.modal').append(name, url, phone, reviews, rating, location, price);
        $('.modal').toggleClass('hide');
	}
}
