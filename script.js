// JavaScript to toggle the mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const closeToggle = document.getElementById('close-link');
const closeToggles = document.getElementById('close-links');
const closeToggless = document.getElementById('close-linkss');
const closeTogglesss = document.getElementById('close-linksss');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

closeToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

closeToggles.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

closeToggless.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

closeTogglesss.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


function sendMessage() {
    (function () {
        emailjs.init("FD5_wWf1t23f2xKYy");
    })();
    var serviceID = "service_ew21mjf"
    var templateID = "template_0ucp7lt";
    var params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        message: document.querySelector("#message").value
    };
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert('Thank you,' + params['sendername'] + '! Your messeage has been sent.');
        })
        .catch();
}
