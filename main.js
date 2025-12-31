// Handle the Form Submission via AJAX
const form = document.getElementById("bookingForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevents the page from refreshing
    
    const data = new FormData(event.target);
    
    try {
        const response = await fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.style.display = "none"; // Hide the form
            successMessage.style.display = "block"; // Show success message
            form.reset();
        } else {
            alert("Oops! There was a problem submitting your form. Please try again.");
        }
    } catch (error) {
        alert("Error connecting to the server. Please check your internet.");
    }
});

// number inputs only
const phoneInput = document.getElementById('phoneNum');

phoneInput.addEventListener('input', function (e) {
    // Replace any character that is NOT a digit, dash, or parenthesis with an empty string
    this.value = this.value.replace(/[^0-9\- \(\)\+]/g, '');
});


// letter only
const nameInput = document.getElementById('name');

nameInput.addEventListener('input', function (e) {
    // Replace anything that is NOT a letter, space, hyphen, or apostrophe
    this.value = this.value.replace(/[^A-Za-z\s'\-]/g, '');
});

// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();