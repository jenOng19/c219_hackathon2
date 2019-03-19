class searchCategory{
    constructor(elements){
        this.domElements=elements;

        this.handleSearchButton=this.handleSearchButton.bind(this);
        this.handleHomeButton=this.handleHomeButton.bind(this);
        this.handleOutsideButton=this.handleOutsideButton.bind(this);

    }

    addEventHandlers(){
		$('#searchButton').click(this.handleSearchButton);
        $('.homeButton').click(this.handleHomeButton);
        $('.outsideButton').click(this.handleOutsideButton); 
    }

    handleSearchButton(){
        var userInput=this.domElements.search.val();
        this.getData(userInput);
    }

    getData(userInput){
        this.handleGetData;
    }

    handleGetData(){
		var ajaxConfig = {
			dataType: 'json',
			data:{"api_key": "6nNnKyzCq0u6dHU-Ycir7C1yW7IAIO_WbX8Cw62pxosdj8Se4QJlmWIFgukCxLTkS3NtVxK3wZ8kwI-6iUyOuqm4TmL44pl29hOJRhzSBw6h5aF62wsfjxt3Z0KQXHYxFDTbESioTh"},
			method: 'get',
			url: 'https://api.yelp.com/v3/businesses/search?location=irvine',
			success: this.handleGetDataSuccess,
		}
		$.ajax(ajaxConfig);
	}

	handleGetDataSuccess(response) {
		console.log("response:" ,response);
		if(response.success){
			for(var key= 0; key<response.businesses.length; key++){
				var food=response.data[key];
				this.createStudent(students.name, students.course, students.grade, students.id);
			}
			this.displayAllStudents();
		}
	}
}