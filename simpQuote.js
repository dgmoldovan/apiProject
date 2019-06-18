url = "https://thesimpsonsquoteapi.glitch.me/quotes"



fetch(url) 
.then(function(result){
    return result.json(); 
}) .then(function(json) {
    displayResults(json)
    // console.log(json);
    // let info=(json[0])
    // console.log(info.character)
    // return info
});

function displayResults(json) {
    let info = (json[0])
    console.log(info)
    document.getElementById("characterName").innerText = info.character;
    document.getElementById("quote").innerText = ` "${info.quote}" `;
    if (info.characterDirection == "Left") {
        document.getElementById("leftSide").src = info.image;
    } else if (info.characterDirection == "Right") {
        document.getElementById("rightSide").src = info.image;
    }
    

}