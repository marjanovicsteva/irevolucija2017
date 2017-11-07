/* global moment localStorage */

var date = moment().date();

window.onload = function() {
    if (typeof(Storage) != "undefined") {
        
        var visited = localStorage.getItem("visited");

        switch (date) {
            case 22:
                localStorage.clear();
                localStorage.setItem("visited", visited);
                window.location.href = "22/index.html";
                break;
            
            case 23:
                localStorage.clear();
                localStorage.setItem("visited", visited);
                window.location.href = "23/index.html";
                break;
                
            case 24:
                localStorage.clear();
                localStorage.setItem("visited", visited);
                window.location.href = "24/index.html";
                break;
                
            case 25:
                localStorage.clear();
                localStorage.setItem("visited", visited);
                window.location.href = "25/index.html";
                break;
                
            case 7:
                localStorage.clear();
                localStorage.setItem("visited", visited);
                window.location.href = "23/index.html";
                break;
                
            case 8:
                localStorage.clear();
                localStorage.setItem("visited", visited);
                window.location.href = "24/index.html";
                break;
                
            case 9:
                localStorage.clear();
                localStorage.setItem("visited", visited);
                window.location.href = "25/index.html";
                break;
                
            default:
                if (date < 22) {
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