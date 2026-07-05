document.addEventListener('DOMContentLoaded', () => {
    const createForm = document.getElementById('createForm');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const shownEmail = document.getElementById('shownEmail');
    const emailInput = document.getElementById('newEmail');
    const emailMsg = document.getElementById('newEmailMsg');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    createForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = emailInput.value.trim();

        if (!value || !emailRegex.test(value)) {
            emailInput.classList.add('error');
            emailMsg.textContent = 'Please enter a valid email address.';
            emailMsg.style.display = 'block';
            return;
        }

        emailInput.classList.remove('error');
        emailMsg.style.display = 'none';

        shownEmail.textContent = value;
        step1.style.display = 'none';
        step2.style.display = 'block';
    });
});
