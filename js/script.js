//typing anymation script*/
var typed = new Typed(".typing", {
    strings: ["","Web Designer", "Data Science Engineer", "Power BI Expert"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true 
});







//massage 
//if number without 0 to 9 digits so alart red color

  document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phoneInput');

    phoneInput.addEventListener('input', function () {
      // Remove non-digit characters
      const cleaned = this.value.replace(/[^0-9]/g, '');
      this.value = cleaned;

      // Mark as invalid if more than 10 digits
      if (cleaned.length > 10) {
        this.classList.add('invalid');
      } else {
        this.classList.remove('invalid');
      }
    });
  });




  //service
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const offset = 80; // Change this according to your navbar height

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});




//project

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
});




//contact

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
});




//resparsive
const openBtn = document.getElementById('open-menu-btn');
const navMenu = document.querySelector('.nav_menu');
const menuLinks = document.querySelectorAll('.nav_menu a');
let closeBtn = null; 
openBtn.addEventListener('click', () => {
    navMenu.classList.add('active');
    if (!closeBtn) {
        closeBtn = document.createElement('li');
        closeBtn.classList.add('dynamic-close-btn');
        closeBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
        navMenu.insertBefore(closeBtn, navMenu.firstChild); 
        closeBtn.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
});
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

