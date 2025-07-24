// Section switching
const links = document.querySelectorAll('[data-target]');
const sections = document.querySelectorAll('.section');

function showSection(id) {
  sections.forEach(section => {
    section.classList.remove('visible');
    if (section.id === id) {
      section.classList.add('visible');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  showSection('landing'); // default
});

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    showSection(target);
  });
});

// Projects (temporary data)
const projects = [
  {
    name: "Smart Price Tracker",
    link: "https://github.com/elmermerto/smart-price-tracker",
    description: "Tracks item prices and alerts on drop.",
    tech: "Python, Selenium, BeautifulSoup"
  },
  {
    name: "ERP Clone",
    link: "https://github.com/elmermerto/erp-clone-php",
    description: "Inventory + transaction tracking app.",
    tech: "PHP, MySQL, JS, HTML/CSS"
  }
];

const container = document.getElementById("projects-container");
if (container) {
  projects.forEach(p => {
    const el = document.createElement("div");
    el.classList.add("project-entry");
    el.innerHTML = `
      <h4><a href="${p.link}" target="_blank">${p.name}</a></h4>
      <p>${p.description}</p>
      <div class="tech">${p.tech}</div>
    `;
    container.appendChild(el);
  });
}
