document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const navList = document.querySelector(".nav-list");

    mobileMenuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
        this.classList.toggle("active");
    });
});
