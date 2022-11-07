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

// memeory game message display logic setup
// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
