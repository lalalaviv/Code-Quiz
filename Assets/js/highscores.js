
var scoreRecord = document.querySelector("#scorerecord");
var back = document.querySelector("#back");
var clear = document.querySelector("#clear"); 

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores); 

if (allScores !== null) {
    for (var i=0; i < allScores.length; i++) {
        var ol = document.createElement("ol"); 
        var listScores = document.createElement("li");
        scoreRecord.textContent = allScores[i]. initials + " - " + allScores[i].score; 
        highScore.appendChild(ol);
        ol.appendChild(listScores);
    }
}


back.addEventListener("click", function() {
window.location.replace = ("./index.html"); 
}); 

clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
})