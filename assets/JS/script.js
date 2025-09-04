// TYPING ANIMATION
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Developer",
    "Web Designer",
    "Business Analyst",
    "Freelancer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
// NAVIGATION ACTIVE CLASS
const navLinks = document.querySelectorAll(".aside .nav li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});
