document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});


const signupTab = document.getElementById('signupTab');
const loginTab = document.getElementById('loginTab');
const activeIndicator = document.getElementById('activeIndicator');
const primaryButto = document.querySelector('.primary-button');

signupTab.addEventListener('click', function (e) {
    e.preventDefault();
    signupTab.classList.add('active');
    signupTab.classList.remove('inactive');
    loginTab.classList.add('inactive');
    loginTab.classList.remove('active');
    activeIndicator.style.left = '0';
    primaryButton.textContent = 'Create an Account';
});

loginTab.addEventListener('click', function (e) {
    e.preventDefault();
    loginTab.classList.add('active');
    loginTab.classList.remove('inactive');
    signupTab.classList.add('inactive');
    signupTab.classList.remove('active');
    activeIndicator.style.left = '50%';
    primaryButton.textContent = 'Login';
});

// Form submission handling
primaryButton.addEventListener('click', function (e) {
    e.preventDefault();
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');

    if (emailInput.value && passwordInput.value) {
        alert('Form submitted successfully!');
    }

    else {
        alert('Please fill in all fields.');
    }
});

// Social login handling
document.querySelector('.secondary-button').addEventListener('click', function () {
    alert('Twitter login functionality would be implemented here.');
});


