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

        var resultsObj = {
            firstResult: $('<div>').addClass("resultContainer"),
            secondResult: $('<div>').addClass("resultContainer"),
            thirdResult: $('<div>').addClass("resultContainer")
        };

        //from response, retrieve name, image/imageLink, phone, number of reviews, rating, location, price; append to carousel dom elements
        //loop to retrieve

        for(var biz = 0; biz <= 2; biz++){
            //pull all the desired response values for current biz and store in variables
            //create dom elements using the response values
           var name = $("<div>").text(response["businesses"][biz]["name"]);
           console.log(name)
           var pic = $("<img>").attr({
                src: response["businesses"][biz]['image_url'],
                alt: response["businesses"][biz]['name']+" "+"photo",
                width: 250,
                height: 165.75,
            });
           var picLink = $("<a>").attr({href: response["businesses"][biz]['url']}).append(pic); //add this to dom(not bizURL or pic)
           var phone = $("<div>").text("Phone: "+response["businesses"][biz]['display_phone']);
           var review = $("<div>").text("Reviews: "+response["businesses"][biz]['review_count']);
           var rating = $("<div>").text("Rating: "+response["businesses"][biz]['rating']+" Stars");
           var addy = $("<div>").text(response["businesses"][biz]['location']['display_address']);
           var price = $("<div>").text("Pricing: "+response["businesses"][biz]['price']);
           ////append to respective results container
           if(biz === 0){
               resultsObj["firstResult"].append(name, picLink, phone, review, rating, addy, price);
               $('.resultOne').append(resultsObj["firstResult"]);
           }else if(biz === 1){
               resultsObj["secondResult"].append(name, picLink, phone, review, rating, addy, price);
               $('.resultTwo').append(resultsObj["secondResult"]);
           }else{
               resultsObj["thirdResult"].append(name, picLink, phone, review, rating, addy, price);
               $('.resultThree').append(resultsObj["thirdResult"]);
           }

           //increment biz
        }

        //when response dom elements have been created and added to carousel slides, remove hide class from modal to make it appear and display the carousel
        $('.modal').toggleClass('hide');
	}
}
