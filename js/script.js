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
            if (!emailValue) {
                showError(emailInput, emailMsg, "Please enter a valid email address or phone number.");
                isValid = false;
            } else if (!emailRegex.test(emailValue)) {
                showError(emailInput, emailMsg, "Please enter a valid email address.");
                isValid = false;
            } else {
                clearError(emailInput, emailMsg);
            }
            if (!passwordValue || passwordValue.length < 4 || passwordValue.length > 60) {
                showError(passwordInput, passMsg, "Your password must contain between 4 and 60 characters.");
                isValid = false;
            } else {
                clearError(passwordInput, passMsg);
            }
            if (isValid) {
                window.location.href = 'who-is-watching.html';
            }
        });
    }
    function showError(inputElement, errorElement, message) {
        inputElement.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    function clearError(inputElement, errorElement) {
        inputElement.classList.remove('error');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    // --- FAQ Accordion Logic ---
    const faqButtons = document.querySelectorAll('.faq-trigger');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            // Close all other open items
            document.querySelectorAll('.faq-box').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            // Toggle current item
            faqItem.classList.toggle('active');
        });
    });
    // --- Carousel Navigation ---
    const sliderList = document.getElementById('sliderList');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (sliderList && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            sliderList.scrollBy({ left: -sliderList.clientWidth * 0.75, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            sliderList.scrollBy({ left: sliderList.clientWidth * 0.8, behavior: 'smooth' });
        });
    }
});
