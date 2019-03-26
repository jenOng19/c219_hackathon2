class Yelp {
    constructor(holdValue) {
        this.value = holdValue;

        this.handleGetData = this.handleGetData.bind(this);
        this.handleGetDataSuccess = this.handleGetDataSuccess.bind(this);
    }

    //===================================================================================================
    // Ajax call to get data from Yelp
    //===================================================================================================

    handleGetData(value) {
        value = this.value;
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
    // Appends/displays the data we receive from yelp to the DOM
    //===================================================================================================

    handleGetDataSuccess(response) {
        console.log("response:", response);
        //from response, retrieve name, image/imageLink, phone, number of reviews, rating, location, price; append to carousel dom elements
        for (var tile = 0; tile <= 5; tile++) {
            $('.result'+tile).empty();
        }
        this.infoTiles = [];
        for (var biz = 0; biz <= 5; biz++) {
            //pull all the desired response values for current biz and store in variables
            //create dom elements using the response values

            var results = $('<div>');
            var name = $("<div>").text(response["businesses"][biz]["name"]);
            var pic = $("<img>").attr({
                src: response["businesses"][biz]['image_url'],
                alt: response["businesses"][biz]['name'] + " " + "photo",
                width: 375,
                height: 248.625,
            });
            var picLink = $("<a>").attr({href: response["businesses"][biz]['url']}).append(pic);
            var phone = $("<div>").text("Phone: " + response["businesses"][biz]['display_phone']);
            var review = $("<div>").text("Reviews: " + response["businesses"][biz]['review_count']);
            var rating = $("<div>").text("Rating: " + response["businesses"][biz]['rating'] + " Stars");
            var address = $("<div>").text(response["businesses"][biz]['location']['display_address']);
            var price = $("<div>").text("Pricing: " + response["businesses"][biz]['price']);

            results.append(name, picLink, phone, review, rating, price);
            //append to respective results container
            this.infoTiles.push(results);
        }
        for (var tile = 0; tile <= this.infoTiles.length-1; tile++) {
            $('.result'+tile).append(this.infoTiles[tile]);
        }
        //empties the array of result tiles to prepare for next time the method is called to do work again
        this.infoTiles.length = 0;
        //.carousel hide: off, .input hide: on
        if($('#apiResponseCarousel').find('.hide')) {
            $('#apiResponseCarousel').removeClass('hide');
        }
        $('.input').css({
            height: "15vh"
            /*justifyContent: "flex-end",*/
        });

    }

}