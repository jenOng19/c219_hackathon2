class Yelp{
    constructor(holdValue){
        this.value=holdValue;

        this.handleGetData=this.handleGetData.bind(this);
        this.handleGetDataSuccess=this.handleGetDataSuccess.bind(this);
    }

    getValue(){
        return this.value
    }

    handleGetData(value){
        value=this.value;
		var ajaxConfig = {
            async: true,
            dataType: "json",
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
        console.log("render/handleGetDataSuccess method called");
        console.log("restaurant name is: ", response["name"]);
        $("#optionsContainer").append(response["name"]);

    }
}