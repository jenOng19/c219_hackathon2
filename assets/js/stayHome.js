class StayHome{
    constructor(userInput){
        this.userInput = userInput;
        this.food = {
            photo: null,
            name: null,
            description: null
        }
        this.ingredients = {};
    }

    getDataFromMealDb(){
        $.ajax({    
            url: 'https://www.themealdb.com/api/json/v1/1/search.php?s',
            dataType: 'json',
            method: 'get',
            data: {api_key: '1'},
            success: function(result) {
            console.log(result); }
        });
    }
}