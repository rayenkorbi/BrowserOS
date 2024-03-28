document.querySelectorAll('.sidebar ul li').forEach(item => {
    item.addEventListener('click', function() {
        const contentSrc = this.getAttribute('data-src');
        const contentFrame = document.getElementById('contentFrame');
        contentFrame.src = contentSrc;
    });
});