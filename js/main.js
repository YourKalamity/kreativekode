
function navbarResponsiveHandler() {
    var x = document.getElementById("pageNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}