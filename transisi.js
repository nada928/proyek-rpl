document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const tujuan = this.getAttribute("href");

        document.body.style.opacity = 0;

        setTimeout(() => {
            window.location.href = tujuan;
        }, 300);
    });
});
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}, 3000); // ganti foto tiap 3 detik
