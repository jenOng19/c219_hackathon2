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
    
    //===================================================================================================
    // Appends/displays the data we receive from yelp to the DOM(modal)
    //===================================================================================================

	handleGetDataSuccess(response) {
		console.log("response:" ,response);

		var results = $('<div>').addClass("responseContainer");
        var resultsTwo = $('<div>').addClass("responseContainer");
        var resultsThree = $('<div>').addClass("responseContainer");

        //from response, retrieve name, image/imageLink, phone, number of reviews, rating, location, price; append to carousel dom elements
        //loop to retrieve



        /*var name = $("<div>").text(response["businesses"][0]['name']);
        var nameTwo =$("<div>").text(response["businesses"][1]['name']);
        var nameThree = $("<div>").text(response["businesses"][2]['name']);

        var image = $("<img>").attr({
            src: response["businesses"][0]['image_url'],
            alt: response["businesses"][0]['name']+" "+"photo",
            width: 250,
            height: 165.75,
        });

        var imageTwo = $("<img>").attr({
            src: response["businesses"][1]['image_url'],
            alt: response["businesses"][1]['name']+" "+"photo",
            width: 250,
            height: 165.75,
        });

        var imageThree = $("<img>").attr({
            src: response["businesses"][2]['image_url'],
            alt: response["businesses"][2]['name']+" "+"photo",
            width: 250,
            height: 165.75,
        });

        //var url = $("<div>").text(response["businesses"][0]['url']);
        var imageLink = $("<a>").attr({href: response["businesses"][0]['url']}).append(image);
        var imageLinkTwo = $("<a>").attr({href: response["businesses"][1]['url']}).append(imageTwo);
        var imageLinkThree = $("<a>").attr({href: response["businesses"][2]['url']}).append(imageThree);

        var phone = $("<div>").text(response["businesses"][0]['display_phone']);
        var phoneTwo = $("<div>").text(response["businesses"][1]['display_phone']);
        var phoneThree = $("<div>").text(response["businesses"][2]['display_phone']);

        var reviews = $("<div>").text("Reviews: "+response["businesses"][0]['review_count']);
        var reviewsTwo = $("<div>").text("Reviews: "+response["businesses"][1]['review_count']);
        var reviewsThree = $("<div>").text("Reviews: "+response["businesses"][2]['review_count']);

        var rating = $("<div>").text("Rating: "+response["businesses"][0]['rating']+" stars");
        var ratingTwo = $("<div>").text("Rating: "+response["businesses"][1]['rating']+" stars");
        var ratingThree = $("<div>").text("Rating: "+response["businesses"][2]['rating']+" stars");

        var location = $("<div>").text(response["businesses"][0]['location']['display_address']);
        var locationTwo = $("<div>").text(response["businesses"][1]['location']['display_address']);
        var locationThree = $("<div>").text(response["businesses"][2]['location']['display_address']);

        var price = $("<div>").text("Price: "+response["businesses"][0]['price']);
        var priceTwo = $("<div>").text("Price: "+response["businesses"][1]['price']);
        var priceThree = $("<div>").text("Price: "+response["businesses"][2]['price']);*/

        results.append(name, imageLink, phone, reviews, rating, location, price);
        resultsTwo.append(nameTwo, imageLinkTwo, phoneTwo, reviewsTwo, ratingTwo, locationTwo, priceTwo);
        resultsThree.append(nameThree, imageLinkThree, phoneThree, reviewsThree, ratingThree, locationThree, priceThree);

        $('.modal').toggleClass('hide');


        $('.slide1').append(results);
        $('.slide2').append(resultsTwo);
        $('.slide3').append(resultsThree);
	}
}
