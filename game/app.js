function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // prikazuje pitanjce
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// kreiranje pitanja, new Question("ovde ide pitanje", ["ovde idu odgovori pod znacima navoda odvojeni zarezom"], "odgovor"),
var questions = [
    new Question("Koliko je 2 + 2?", ["1", "2", "3", "4"], "3")
];

// 
var quiz = new Quiz(questions);

// display quiz
populate();





