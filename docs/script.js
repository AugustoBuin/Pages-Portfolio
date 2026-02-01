// Open modal with card content
document.querySelectorAll('.project-card .card-header').forEach(header => {
    header.addEventListener('click', function () {
        const card = this.parentElement;
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');

        // Copy the inner content of card-body to the modal
        const content = card.querySelector('.card-body').innerHTML;
        modalBody.innerHTML = content;

        modal.classList.add('show');
    });
});

// Close modal on close button click
document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('projectModal').classList.remove('show');
});

// Close modal on outside click
window.addEventListener('click', function (event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});


// Toggle Dark Mode Theme
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Mobile Navbar Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link (mobile UX improvement)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
