class Beer{
    constructor(value){
        this.value = value;
        this.beer = {};
        this.getBeerValue=this.getBeerValue.bind(this);
        this.handleGetDataSuccess = this.handleGetDataSuccess.bind(this);
    }
    //===================================================================================================
    // API call to beer database WIP. Currently will not pull by name so temporary for loop created.
    // Name not pulling as it's supposed to 
    //===================================================================================================

    getBeerValue(value){
        value = this.value;
        var ajaxConfig = {
            async: true,
            crossDomain: true,
            url: 'assets/php/beerproxy.php',
            data: {
                name: value,
            },
            dataType: 'json',
            method: 'get',
            success: this.handleGetDataSuccess,
        };
        $.ajax(ajaxConfig);
    }
    handleGetDataSuccess(response) {
        if (!response.data) {
            return;
        } else {
            for (var beerIndex = 0; beerIndex < response.data.length; beerIndex++) {
                var lowercaseString = response.data[beerIndex].name.toLowerCase();
                if (lowercaseString.includes(this.value)) {
                    console.log('beer found!', lowercaseString);
                    this.render(lowercaseString);
                }
            }
        }
    }
    render(){
        console.log('WIP');
    }
}