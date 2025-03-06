

document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-bar li");
    const sections = document.querySelectorAll(".section");

    navItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            sections.forEach((section) => section.classList.add("hidden"));
            sections[index].classList.remove("hidden");
        });
    });
});

function downloadResume() {
    window.open("Resume.html", "_blank");
}
