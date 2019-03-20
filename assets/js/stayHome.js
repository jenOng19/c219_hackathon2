class StayHome {
    constructor(value) {
        this.value = value;
        this.food = {
            photo: null,
            name: null,
            description: null
        }
        this.dinner = [];
        this.ingredients = {};
        this.getDataByName=this.getDataByName.bind(this);
        //this.getDataByIngredient = this.getDataByIngredient.bind(this);
        this.handleGetDataSuccess = this.handleGetDataSuccess.bind(this);
    }

    getDataByName(value) {
        value = this.value;
        var ajaxConfig = {
            async: true,
            crossDomain: true,
            url: 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + value,
            dataType: 'json',
            method: 'get',
            success: this.handleGetDataSuccess,
        };
        $.ajax(ajaxConfig);
    }
    handleGetDataSuccess(response){
        console.log("StayHome handleGetDataSuccess called");
        console.log(response)
        

    }
}