document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for animations
    const sections = document.querySelectorAll('.content-section');
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // LOGO LINKS
    document.getElementById('DAVV_LINK_LOGO').addEventListener('click', () => {
        window.open('https://www.dauniv.ac.in/', '_blank');
    });
    document.getElementById('IIPS_LINK_LOGO').addEventListener('click', () => {
        window.open('https://iips.edu.in/', '_blank');
    });


    // Responsive Navbar
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show-nav');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const titles = document.querySelectorAll('.committee-title');

    titles.forEach(title => {
        title.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const content = document.getElementById(targetId);
            const isVisible = content.style.display === 'block';

            // Toggle content visibility
            content.style.display = isVisible ? 'none' : 'block';
            this.querySelector('.toggle-icon').textContent = isVisible ? '+' : '−';
        });
    });
});

// Sticky Nav
window.onscroll = function () { stickyNavbar() };

var navbar = document.querySelector(".nav-container");
var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
