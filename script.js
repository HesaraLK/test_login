let main_content = document.querySelector(".main_content");
let registerForm = document.querySelector(".register_form");
let registerBtn = document.querySelectorAll(".btn_register");
let registerBtn2 = registerBtn[registerBtn.length - 1];
let loginBtn = document.querySelectorAll(".btn_login");
let loginBtn2 = loginBtn[loginBtn.length - 1];

function changeBackground() {
    document.body.style.backgroundImage = "linear-gradient(90deg, #e2e2e2, #c9d6ff)";
    main_content.style.display = "none"
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.minHeight = "100vh";

    registerForm.style.display = "block";
}

document.getElementById('mail').addEventListener('click', function () {
    window.open('contact_us.html', '_blank');
});

registerBtn2.addEventListener('click', () => {
    registerForm.classList.add('active');
});

loginBtn2.addEventListener('click', () => {
    registerForm.classList.remove('active');
});

let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    currentIndex += step;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

}

setInterval(() => { moveSlide(1); }, 5000);

const today = new Date().toISOString().split("T")[0];
document.getElementById("dates").setAttribute("min", today);
