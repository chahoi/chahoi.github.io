// Smooth Animations on Scroll
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", { opacity: 0, duration: 1, y: 50 });
gsap.from(".skills-grid .skill", {
  scrollTrigger: ".skills-grid",
  opacity: 0,
  stagger: 0.2,
  duration: 1,
});

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Contact Form Alert
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});
