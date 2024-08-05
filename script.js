document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        if (!name.value.trim()) {
            valid = false;
            name.classList.add('is-invalid');
        } else {
            name.classList.remove('is-invalid');
        }

        if (!email.value.trim() || !validateEmail(email.value)) {
            valid = false;
            email.classList.add('is-invalid');
        } else {
            email.classList.remove('is-invalid');
        }

        if (!subject.value.trim()) {
            valid = false;
            subject.classList.add('is-invalid');
        } else {
            subject.classList.remove('is-invalid');
        }

        if (!message.value.trim()) {
            valid = false;
            message.classList.add('is-invalid');
        } else {
            message.classList.remove('is-invalid');
        }

        if (valid) {
            // Form submission logic here
            alert('Form submitted successfully!');
        }
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
