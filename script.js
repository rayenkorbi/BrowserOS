/* Toggling the menu button On an Off */
function toggleMenu() {
    var menu = document.getElementById("Menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}