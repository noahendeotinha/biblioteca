document.addEventListener('DOMContentLoaded', () => {
  // Toggle menu mobile
  document.querySelectorAll('.hamburger').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('active');
    });
  });
});
