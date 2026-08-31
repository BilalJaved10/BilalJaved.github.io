// ===== SCROLL ANIMATION =====

// Select all elements with class "fade-in"
const elements = document.querySelectorAll('.fade-in');

// Function to check visibility
function showOnScroll() {
    elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;

        // When element comes into view
        if (top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
}

// Run on scroll
window.addEventListener('scroll', showOnScroll);

// Run once on load
showOnScroll();


// ===== SMOOTH SCROLL (OPTIONAL) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});
// ===== DARK / LIGHT MODE TOGGLE =====

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {

    // Toggle class
    body.classList.toggle("light-mode");

    // Save theme
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "🌙";
    }

});