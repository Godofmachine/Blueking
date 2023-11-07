// Function to check if the screen width is greater than or equal to 768px
function isScreenLargeEnough() {
    return window.innerWidth >= 768;
}

// Initialize ScrollReveal
const sr = ScrollReveal();

// Function to initialize animations if the screen is large enough
function initializeAnimationsIfScreenIsLargeEnough() {
    if (isScreenLargeEnough()) {
        // Scroll Animation
        sr.reveal('.scrolls', {
            duration: 1000,
            origin: 'bottom',
            distance: '20px',
            delay: 200,
            reset: true,
        });
        sr.reveal('.scrollsd', {
            duration: 1000,
            origin: 'top',
            distance: '20px',
            delay: 200,
            reset: true,
        });

        // Skill Bar Animation
        sr.reveal('.progress-bar-fill', {
            duration: 1000,
            origin: 'left',
            distance: '100%',
            delay: 200,
            reset: true,
        });
        sr.reveal('.progress-bar-fill', {
            duration: 1000,
            origin: 'right',
            distance: '100%',
            delay: 200,
            reset: true,
        });

        // Form Elements Animation
        sr.reveal('.form-element', {
            duration: 1000,
            origin: 'left',
            distance: '100%',
            delay: 200,
            reset: true,
        });
        sr.reveal('.form-element', {
            duration: 1000,
            origin: 'right',
            distance: '100%',
            delay: 200,
            reset: true,
        });
    }
}

// Call the function to initialize animations when the page loads
initializeAnimationsIfScreenIsLargeEnough();

// Add an event listener to check for screen resize and initialize animations accordingly
window.addEventListener('resize', () => {
    initializeAnimationsIfScreenIsLargeEnough();
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

    // Prepare form data for sending
    const formData = new FormData(contactForm);

    // Send the form data to the Web3Forms API using fetch
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // Check if the submission was successful
        if (data.success) {
            // Show the success alert
            successAlert.style.display = "flex";
        } else {
            // Handle errors (e.g., show an error message)
            console.error('Form submission failed:', data.message);
        }
    })
    .catch(error => {
        // Handle network errors
        console.error('Form submission error:', error);
    });

    closeAlertButton.addEventListener("click", function () {
        successAlert.style.display = "none"; // Hide the success alert
    });

    // Optionally reset the form if needed
    // contactForm.reset();
});
