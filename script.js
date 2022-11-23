// Open and Close project description
const projects = document.querySelectorAll('.projects article .description');

projects.forEach((description, ind) => {
  description.addEventListener('click', () => {
    const paragrpah = description.children[1];
    let icon = description.children[0].children[0];

    paragrpah.classList.toggle('open');
    icon.className === 'uil uil-plus'
      ? (icon.className = 'uil uil-minus')
      : (icon.className = 'uil uil-plus');
  });
});

// Dark/Light mode functionality section
// i don't know why the condition is working in this way
// and not the reverse (the correct way)
let darkMode = false;
const body = document.querySelector('body');
const visibilityButton = document.querySelector('.visibility');

visibilityButton.addEventListener('click', () => {
  if (darkMode) {
    visibilityButton.innerHTML = '<i class="uil uil-sun"></i>';
    body.classList.toggle('dark-mode');
    darkMode = false;
  } else {
    visibilityButton.innerHTML = '<i class="uil uil-moon"></i>';
    body.classList.toggle('dark-mode');
    darkMode = true;
  }
});

// Hamburger menu functionality section
let menuIsVisible = false;
const barsButton = document.querySelector('.bars-button');
const hamburgerMenu = document.querySelector('.menu');

barsButton.addEventListener('click', () => {
  if (menuIsVisible) {
    hamburgerMenu.style.display = 'none';
    menuIsVisible = false;
  } else {
    hamburgerMenu.style.display = 'block';
    menuIsVisible = true;
  }
});
