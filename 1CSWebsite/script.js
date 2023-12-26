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
        
    } else {
        navbar.classList.remove("sticky");
        console.log("dropping sticky")
    }
}