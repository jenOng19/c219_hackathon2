class Yelp{
    constructor(holdValue){
        this.value=holdValue;

        this.handleGetData=this.handleGetData.bind(this);
        this.handleGetDataSuccess=this.handleGetDataSuccess.bind(this);
    }


    handleGetData(value){
        value=this.value;
		var ajaxConfig = {
            async: true,
            crossDomain: true,
            dataType: "json",
            url: "http://danielpaschal.com/lfzproxies/yelpproxy.php",//?term=taco&location=irvine",
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
		}
		$.ajax(ajaxConfig);
	}

	handleGetDataSuccess(response) {
		console.log("response:" ,response);
		// if(response.success){
        var name=response['name'];
        var image=response['image_url'];
        var url=response['url'];
        var phone=response['display_phone'];
        var reviews=response['review_count'];
        var rating=response['rating'];
        var location=response['location']['display_address'];
        var price=response['price'];
        $('.modal').append(name, url, phone, reviews, rating, location, price) //.css('background-image', 'url('image')');
        $('.modal').toggleClass('hide');
	}
}