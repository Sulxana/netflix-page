document.addEventListener('DOMContentLoaded', () => {
    // --- Sign In Form Validation ---
    const signInForm = document.getElementById('signInForm');
    if (signInForm) {
        signInForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailInput = document.getElementById('userEmail');
            const passwordInput = document.getElementById('userPass');
            const emailMsg = document.getElementById('emailMsg');
            const passMsg = document.getElementById('passMsg');
            const emailValue = emailInput.value.trim();
            const passwordValue = passwordInput.value.trim();
            let isValid = true;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
});
