// Navbar toggle
document.getElementById('nav-toggle').addEventListener('click', function () {
    document.getElementById('nav-menu').classList.toggle('show');
});


// Gallery modal section 
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const src = this.getAttribute('src');
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${src}" alt="Modal Image">
                </div>
            `;
            document.body.appendChild(modal);

            const closeModal = () => {
                document.body.removeChild(modal);
            };

            modal.querySelector('.close').addEventListener('click', closeModal);
            modal.addEventListener('click', closeModal);
        });
    });
});

// Contact form validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const phone = document.getElementById("phone");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const phoneError = document.getElementById("phoneError");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Reset error and success messages
        successMessage.style.display = "none";

        // Name validation
        if (name.value.trim() === "") {
            valid = false;
            nameError.textContent = "Name is required.";
            nameError.style.display = "block";
        } else {
            nameError.style.display = "none";
        }

        // Email validation
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (email.value.trim() === "") {
            valid = false;
            emailError.textContent = "Email is required.";
            emailError.style.display = "block";
        } else if (!emailPattern.test(email.value)) {
            valid = false;
            emailError.textContent = "Please enter a valid email address.";
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }

        // Phone number validation
        const phonePattern = /^[0-9]{10,15}$/; // Minimum 10 digits, maximum 15 digits
        if (phone.value.trim() === "") {
            valid = false;
            phoneError.textContent = "Phone number is required.";
            phoneError.style.display = "block";
        } else if (!phonePattern.test(phone.value)) {
            valid = false;
            phoneError.textContent = "Please enter a valid phone number (10-15 digits).";
            phoneError.style.display = "block";
        } else {
            phoneError.style.display = "none";
        }

        // Message validation
        if (message.value.trim() === "") {
            valid = false;
            messageError.textContent = "Message cannot be empty.";
            messageError.style.display = "block";
        } else {
            messageError.style.display = "none";
        }

        // Prevent form submission if validation fails
        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault(); // Prevent actual submission for demo purposes

            // Display success message
            successMessage.style.display = "block";

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);

            // Optionally reset form fields
            form.reset();
        }
    });
});

