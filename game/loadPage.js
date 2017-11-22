/* global moment localStorage */

var date = new Date().getDate();
var today = parseInt(localStorage.lastTimeUpdated, 10);

if (typeof(today) == "undefined") {
    localStorage.setItem("lastTimeUpdated", 0);
    localStorage.setItem("visited", 0);
}
else {
    if (today == date) {
        localStorage.setItem("visited", 1);
    }
    else {
        localStorage.setItem("visited", 0);
    }
}
window.onload = function() {
    if (typeof(Storage) != "undefined") {

        switch (date) {
            case 23:


                window.location.href = "23/index.html";
                break;

            case 24:


                window.location.href = "24/index.html";
                break;

            case 25:


                window.location.href = "25/index.html";
                break;

            case 7:


                window.location.href = "23/index.html";
                break;

            case 8:


                window.location.href = "24/index.html";
                break;

            case 9:


                window.location.href = "25/index.html";
                break;

            default:
                 if (date < 23) {
                    window.location.href = "../index.html";
                    alert("Kviz je dostupan tek na pocetku konferencije.");
                } else if (date > 25) {
                    window.location.href = "../index.html";
                    alert("Konferencija je prosla. Kviz vise nije dostupan.");
                }
        }
    } else {
        alert("Local Storage not supported by your browser. Please update it or otherwise the app might not function properly");
    }
};
