/* global $ localStorage */

var question = 1;
var score = 0;
if (localStorage.visited == 1) {
    alert("Vec ste igrali kviz danas.");
    window.location.href = "../../index.html";
} else {
    $(document).ready(function() {
        var maxQuestion = $(".card").length - 1;
    
        if (typeof(Storage) != "undefined") {
            localStorage.setItem("ukupnoPoena", 0);
            var ukupnoPoena = parseInt(localStorage.getItem("ukupnoPoena"), 10);
            $(".btn").click(function() {
                if (question >= 1 && question <= maxQuestion) {
                    if ($(this).hasClass("correct")) {
                        $(this).siblings(".btn").prop("disabled", true);
                        $(this).prop("disabled", true);
                        $(this).addClass("btn-success");
                        score++;
                        ukupnoPoena++;
                        localStorage.setItem("ukupnoPoena", ukupnoPoena);
                    } else {
                        $(this).siblings(".btn").prop("disabled", true);
                        $(this).siblings(".correct").addClass("btn-success");
                        $(this).prop("disabled", true);
                        $(this).addClass("btn-danger");
                    }
                    question++;
                    setTimeout(function () {
                        $("#q" + (question - 1)).addClass("hide");
                        var selector = "#q" + question;
                        $(selector).removeClass("hide");
                        if (question == maxQuestion + 1) {
                            localStorage.setItem("visited", 1);
                            $("#resultScore").removeClass("hide");
                            $("#score").text(score);
                            $("#ukupanScore").text(ukupnoPoena);
                        }
                    }, 1000);
                }
            });
        } else {
            alert("Local Storage not supported by your browser. Please update it.");
        }
        
    });


}