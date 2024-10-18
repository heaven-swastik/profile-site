window.addEventListener("scroll", function() {
    let content = document.querySelector('.content');
    let position = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    
    if (position < screenPosition) {
        content.classList.add('fade-in');
    }
});
