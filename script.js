// Smooth scroll for internal links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Theme toggle example (dark/light mode – optional)
const toggleTheme = () => {
  document.body.classList.toggle('light-mode');
  const currentTheme = document.body.classList.contains('light-mode') ? 'Light' : 'Dark';
  console.log(`Theme switched to ${currentTheme}`);
};

// If you want to enable this, add a button like:
// <button onclick="toggleTheme()">Toggle Theme</button>

// Entry animation on scroll using IntersectionObserver (basic fade-in)
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      obs.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});
