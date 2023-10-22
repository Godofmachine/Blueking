// Initialize ScrollReveal
const sr = ScrollReveal();

// Scroll  Animation
sr.reveal('.scrolls', {
    duration: 1000,   // Animation duration (in milliseconds)
    origin: 'bottom', // Animation starts from the bottom
    distance: '20px', // Distance the element moves during the animation
    delay: 200,       // Delay before the animation starts (in milliseconds)
    reset: true, // Apply reset animation

});
sr.reveal('.scrollsd', {
    duration: 1000,
    origin: 'top', // Animation starts from the top when scrolling up
    distance: '20px',
    delay: 200,
    reset: true, // Apply reset animation
});

// Skill Bar Animation
sr.reveal('.progress-bar-fill', {
    duration: 1000,
    origin: 'left',   // Animation starts from the left
    distance: '100%',
    delay: 200,
    reset: true, // Apply reset animation

});
sr.reveal('.progress-bar-fill', {
    duration: 1000,
    origin: 'right',   // Animation starts from the left
    distance: '100%',
    delay: 200,
    reset: true, // Apply reset animation

});

// Form Elements Animation
sr.reveal('.form-element', {
    duration: 1000,
    origin: 'left',
    distance: '100%',
    delay: 200,
    reset: true, // Apply reset animation

});
sr.reveal('.form-element', {
    duration: 1000,
    origin: 'right',   // Animation starts from the left
    distance: '100%',
    delay: 200,
    reset: true, // Apply reset animation

});


var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

const contactForm = document.getElementById("contact-form");
        const successAlert = document.getElementById("alert-border-1");
        const closeAlertButton = document.getElementById("closeAlert");


        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the form from redirecting

            // Simulate a successful form submission
            // You can replace this with your actual form submission code
            setTimeout(function () {
                successAlert.style.display = "flex"; // Show the success alert
            }, 2000); // Simulate a 2-second delay (you can adjust this)

            closeAlertButton.addEventListener("click", function () {
                successAlert.style.display = "none"; // Hide the success alert
            });

            // Reset the form if needed
            // contactForm.reset();
        });