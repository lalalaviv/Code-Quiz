
var scoreRecord = document.querySelector("#scorerecord");
var back = document.querySelector("#back");
var clear = document.querySelector("#clear"); 

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores); 

// creates a new li for each score record
if (allScores !== null) {
    for (var i=0; i < allScores.length; i++) {
        var listScores = document.createElement("li");
        listScores.textContent = allScores[i]. initials + " - " + allScores[i].score; 
        scoreRecord.appendChild(listScores); 
    }
}

// Goes back to main page with click on go back button
back.addEventListener("click", function() {
window.location = ("./index.html"); 
}); 

// Clears high score record with click 
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
    listScores.textContent = "";
})