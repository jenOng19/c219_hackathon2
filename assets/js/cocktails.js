class Cocktails{
    constructor(value){
        this.value = value;
        this.cocktails = {};
        this.dinner = [];
        this.ingredients = [];
        this.getDataByName=this.getDataByName.bind(this);
    }
    getDataByName(value){
        debugger;
        value = this.value;
        $.ajax({    
            async: true,
            crossDomain: true,
            url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ value,
            dataType: 'json',
            method: 'get',
            success: function(result) {
                console.log(result);
            }
        }); 
    }
}