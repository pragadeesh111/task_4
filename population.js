//step 1 : create a XHR object
var request = new XMLHttpRequest();
//step 2 : API URl
request.open("GET","https://restcountries.com/v3.1/all");
//step 3 : Establishment bridge
request.send();
//step 4 : once data sucessfully received from server
request.onload = function(){
    var result = JSON.parse(request.response);
    for(let i=0;i<result.length;i++){
        console.log("Name: "+ result[i].name.common);
        console.log("Region: "+ result[i].region);
        console.log("Subregion: "+ result[i].subregion);
        console.log("Population: "+ result[i].population);
    }
}