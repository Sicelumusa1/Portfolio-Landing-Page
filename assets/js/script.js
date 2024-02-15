const navLinks = document.querySelectorAll('nav ul li a');
const toggler = document.querySelector('.toggle-sidebar');
const sidebar = document.getElementById('sidebar');

// switch the section

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const activeLink = document.querySelector('nav ul li a.active');
    const activeSection = document.querySelector('main > section.active');
    const targetSection = document.querySelector(`main > section${link.getAttribute('href')}`);

    //remove class 'active from both the link and section
    activeLink.classList.remove('active');
    activeSection.classList.remove('active');

    //remove class 'active from both the link and section
    link.classList.add('active');
    targetSection.classList.add('active');
  });
  
});

toggler.addEventListener('click', () => {
  if (sidebar.classList.contains('close')) {
    sidebar.classList.remove('close');
  } else {
    sidebar.classList.toggle('open');
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.add('close');
  });
});


var typed = new Typed('.project-title h4', {
  strings: ['Ward Councilor Rating App', 'Local Government Service Delivery Evaluator'],
  loop: true, typeSpeed: 70, backSpeed: 10,
});

