
api = 
key = "4b0c3093671492eebd33bcc12a721cc5dd11d89b"
url = "https://cors-anywhere.herokuapp.com/giantbomb.com/api/concept/3015-229/?api_key=4b0c3093671492eebd33bcc12a721cc5dd11d89b&format=json"
//&format=jsonp&json_callback=
//"https://www.giantbomb.com/api/concept/3015-229/?api_key=4b0c3093671492eebd33bcc12a721cc5dd11d89b"

console.log("is this working?")

fetch(url) 
.then(function(result){
    console.log(result)
    return result.json(); 
}) .then(function(json) {
    console.log(json)
    displayResults(json);

});

function displayResults(json) {

}