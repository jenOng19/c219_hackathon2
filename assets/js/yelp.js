class Yelp{
    constructor(holdValue){
        this.value=holdValue;

        this.handleGetData=this.handleGetData.bind(this);
        this.handleGetDataSuccess=this.handleGetDataSuccess.bind(this);
    }

    // render(){
    //     var display=this.handleGetData();
    //     $('.modal').append(display);
    //     $('.modal').toggleClass('hide');
    // }

    handleGetData(value){
        value=this.value;
		var ajaxConfig = {
            async: true,
            crossDomain: true,
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
		if(response.success){
            var name=response.name;
            var image=response.image_url;
            var url=response.url;
            var phone=response.display_phone

            // for(var key= 0; key<response.data.length; key++){
			// 	var students=response.data[key];
            // $('.modal').toggleClass('hide');
		}
	}
}