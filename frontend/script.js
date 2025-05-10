// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 60;

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll to Hero Section on "Shop Now" Button Click
const shopNowBtn = document.querySelector('#shop-now-btn');
if (shopNowBtn) {
  shopNowBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const heroSection = document.querySelector('.hero');
    const offset = 60;

    if (heroSection) {
      window.scrollTo({
        top: heroSection.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
}

// Sticky Navigation Bar
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
}

// Toggle Mobile Navigation Menu
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('nav ul');

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });
}
