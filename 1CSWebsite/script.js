// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar


// Get the offset position of the navbar


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    var navbar = document.getElementById("NavBar");

    var sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
        var links = document.getElementsByTagName("a");
        console.log(links)
        for (var i = 0; i < links.length; i++) {
            if (links[i].href) {
                links[i].style.color = "#000000";
            }
        }

    } else {
        navbar.classList.remove("sticky");
        var links = document.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            if (links[i].href) {
                links[i].style.color = "white";
            }
        }
    }
}