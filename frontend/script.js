// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll to Hero Section on "Shop Now" Button Click
document.querySelector('.btn').addEventListener('click', function (e) {
  e.preventDefault();
  const heroSection = document.querySelector('.hero');

  if (heroSection) {
    window.scrollTo({
      top: heroSection.offsetTop,
      behavior: 'smooth'
    });
  }
});

// Sticky Navigation Bar on Scroll
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

// Toggle Mobile Navigation Menu
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('nav ul');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });
}