/* Toggling the menu button On an Off */
function toggleMenu() {
    var menu = document.getElementById("Menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

/* Popup open / close */
document.addEventListener('DOMContentLoaded', function() {
    var softwareIcons = document.querySelectorAll('.software');

    softwareIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            document.querySelectorAll('.popup').forEach(function(popup) {
                popup.style.display = 'none';
            });
            this.querySelector('.popup').style.display = 'block';
        });
    });

    var closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); 
            this.parentElement.style.display = 'none'; 
        });
    });
});


