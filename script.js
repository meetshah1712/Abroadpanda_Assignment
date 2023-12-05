// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}
