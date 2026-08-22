const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });
document.querySelectorAll('.section, .feature-grid, .profile-card, .discovery-grid figure').forEach(el => observer.observe(el));
