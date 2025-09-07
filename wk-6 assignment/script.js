// Event handling for toggle dark mode
document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Event handling for collapsible FAQ
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Form validation
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Validate name
    const name = document.getElementById('name').value;
    if (!name.trim()) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    // Success message
    if (isValid) {
        document.getElementById('message').textContent = 'Form submitted successfully!';
        document.getElementById('message').className = 'success';
        this.reset();
    }
});