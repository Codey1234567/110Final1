function hamburger() {
    let links = document.getElementById("menu-links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}