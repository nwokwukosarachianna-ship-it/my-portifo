// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const formMessage =
            document.getElementById("formMessage");

        formMessage.textContent =
            "Thank you! Your message has been received.";

        contactForm.reset();

    });

}