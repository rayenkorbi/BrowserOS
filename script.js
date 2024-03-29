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
document.addEventListener('DOMContentLoaded', function () {
    var softwareIcons = document.querySelectorAll('.software');

    softwareIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            document.querySelectorAll('.popup').forEach(function (popup) {
                popup.style.display = 'none';
            });
            this.querySelector('.popup').style.display = 'block';
        });
    });

    var closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            this.parentElement.style.display = 'none';
        });
    });
});


/*RightClick Show / Hide */
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    var contextMenu = document.getElementById("rightClick");
    var menuWidth = contextMenu.offsetWidth;
    var menuHeight = contextMenu.offsetHeight;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    //inside the viewport
    var posX = event.clientX;
    var posY = event.clientY;

    //right edge
    if (posX + menuWidth > windowWidth) {
        posX = windowWidth - menuWidth;
    }

    //bottom edge
    if (posY + menuHeight > windowHeight) {
        posY = windowHeight - menuHeight;
    }

    contextMenu.style.top = posY + "px";
    contextMenu.style.left = posX + "px";
    contextMenu.classList.add("active");
});

document.addEventListener("click", function (event) {
    var rightClickMenu = document.getElementById("rightClick");
    if (!rightClickMenu.contains(event.target)) {
        rightClickMenu.classList.remove("active");
    }
});


/*Date and Time*/
function updateDateTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let timeString = `${hours}:${minutes}`;

    let day = now.getDate().toString().padStart(2, '0');
    let month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    let year = now.getFullYear();
    let dateString = `${day}/${month}/${year}`;

    // Combine both time and date, separated by a line break
    document.getElementById('datetime').innerHTML = `${timeString}<br>${dateString}`;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initialize on page load
updateDateTime();