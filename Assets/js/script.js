var timerElement = document.querySelector("#timer");
var quiz = document.querySelector(".quiz");
var questionsDiv = document.querySelector(".questions");
var startButton = document.querySelector(".start-button");
var choices = document.querySelector(".choices");
var answers = document.querySelector(".answer");
var startTime = 0;
var timerCount = 76;
var penalty = 10;
var index = 0;
var score = 0;


var codeQuestion = [
    {
        question: "Commonly used data types DO NOT include:",
        choice: ["1. string", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ________.",
        choice: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "3. parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store_______.",
        choice: ["1. number and strings", "2. etiher arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choice: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choice: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: "4. console.log"
    }]


function startTimer() {
    // Sets timer
    if (startTime === 0) {
        startTime = setInterval(function () {
            timerCount--;
            timerElement.textContent = "Time: " + timerCount;

            if (timerCount <= 0) {
                clearInterval(startTime);
                gameEnd();
                timerElement, textContent = "Time's up!";
            }

        }, 1000);
    }
}

startButton.addEventListener("click", startGame);


function startGame() {
    questionsDiv.innerHTML = "";
    choices.innerHTML = "";
    for (var i = 0; i < codeQuestion.length; i++) {
        var userQuestion = codeQuestion[index].question;
        var userChoice = codeQuestion[index].choice;
        questionsDiv.textContent = userQuestion;
    }

    userChoice.forEach(function (newItem) {
        var listChoice = document.createElement("li");
        var buttons = document.createElement("button");
        choices.appendChild(listChoice);
        listChoice.appendChild(buttons);
        buttons.textContent = newItem;
        buttons.setAttribute("style", "text-align: left");
        buttons.addEventListener("click", compareAns);
    })
    startTimer();
}


function compareAns(event) {
    var selected = event.target;

    if (selected.textContent == codeQuestion[index].answer) {
        score++;
        answers.textContent = "Correct!"
    } else {
        timerCount = timerCount - penalty;
        answers.textContent = "Wrong answer!"
    }
    index++;

    if (index >= codeQuestion.length) {
        gameEnd();

    } else {
        startGame(index);
    }
}


function gameEnd() {
    timerCount.innerHTML = "";
    questionsDiv.innerHTML = "";
    choices.innerHTML = "";
    answers.innerHTML = "";

    // heading 
    var allDone = document.createElement("h1");
    allDone.setAttribute("id", "allDone")
    allDone.textContent = "All done!"

    questionsDiv.appendChild(allDone);

    // results 
    var results = document.createElement("p");
    results.setAttribute("id", "results");

    choices.appendChild(results);


    // calculates score with time remaining 
    if (timerCount >= 0) {
        clearInterval(startTime);
        results.textContent = "Your final score is: " + timerCount + ".";
    }

    // creating a label 
    var label = document.createElement("label");
    label.setAttribute("id", "label");
    label.textContent = "Enter your intitials: ";

    choices.appendChild(label);

    //input initials
    var initials = document.createElement("input");
    initials.setAttribute("id", "initials");
    initials.textContent = "";

    choices.appendChild(initials);

    //submit button
    var submitB = document.createElement("button");
    submitB.setAttribute("type", "submit");
    submitB.setAttribute("id", "submit");
    submitB.textContent = "Submit";

    choices.appendChild(submitB);

    submitB.addEventListener("click", function () {
        var userInitials = initials.value;

        if (userInitials === null) {
            console.log("No value entered!");
        } else {
            finalScore = {
                initials: userInitials,
                score: timerCount
            }
            console.log(finalScore);

            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }

            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);

            window.location.replace("./highscores.html");

        }

    });

}


