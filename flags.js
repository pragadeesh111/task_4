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
        console.log(result[i].name.common + ": " + result[i].flags.png);
    }
}