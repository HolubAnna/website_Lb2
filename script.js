document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!firstName || !lastName || !email || !password) {
        alert('Будь ласка, заповніть усі поля.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Будь ласка, введіть коректну електронну пошту.');
        return;
    }

    alert('Форма успішно відправлена!');
});

function validateEmail(email) {
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return re.test(email);
}