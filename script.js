// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to Mehak Baloch's Portfolio!");
});


// Project card hover effect
const projects = document.querySelectorAll(".project");

projects.forEach(function (project) {

    project.addEventListener("mouseenter", function () {
        project.style.transform = "translateY(-8px)";
    });

    project.addEventListener("mouseleave", function () {
        project.style.transform = "translateY(0)";
    });

});