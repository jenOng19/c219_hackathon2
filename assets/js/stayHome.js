class StayHome{
    constructor(value){
        this.value = value;
        this.food = {
            photo: null,
            name: null,
            description: null
        }
        this.dinner = [];
        this.ingredients = {};
        // this.getDataByName=this.getDataByName.bind(this);
        this.getDataByIngredient=this.getDataByIngredient.bind(this);

    }

    getDataByName(value){
        value = this.value;
        $.ajax({    
            async: true,
            crossDomain: true,
            url: 'https://www.themealdb.com/api/json/v1/1/search.php?s='+ value,
            dataType: 'json',
            method: 'get',
            success: function(result) {
            console.log(result);
            }
        });
    }
    getDataByIngredient(value){
        value = this.value;
        $.ajax({    
            async: true,
            crossDomain: true,
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?i='+ value,
            dataType: 'json',
            method: 'get',
            success: function(result) {
            console.log(result);
            }
        });
    }
    render(){
        
    }
}