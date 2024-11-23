// Smooth Animations on Scroll
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", { opacity: 0, duration: 1, y: 50 });
gsap.from(".skills-grid .skill", {
  scrollTrigger: ".skills-grid",
  opacity: 0,
  stagger: 0.2,
  duration: 1,
});

// Select the toggle button
const themeToggle = document.querySelector('.theme-toggle');

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Update the button text based on the current theme
if (savedTheme === 'dark') {
  themeToggle.textContent = 'Light Mode';
} else {
  themeToggle.textContent = 'Dark Mode';
}

// Add event listener to toggle button
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  // Set the new theme
  document.documentElement.setAttribute('data-theme', newTheme);
  
  // Save the new theme in localStorage
  localStorage.setItem('theme', newTheme);
  
  // Update the button text
  themeToggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
});
