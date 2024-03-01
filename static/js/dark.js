const toggleBtn = document.querySelector('#color-toggle');
const toggleBtnIcon = document.querySelector('#color-toggle > i');

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)");

function toggleDarkTheme() {
    toggleBtn.setAttribute('title', 'Toggle dark mode (currently on)');
    toggleBtn.setAttribute('aria-label', 'Toggle dark mode (currently on)');
    toggleBtnIcon.classList.remove('ri-moon-line');
    toggleBtnIcon.classList.add('ri-sun-line');
    document.body.classList.add('dark-mode');
    currentTheme = "dark";
    localStorage.setItem("theme", "dark");
}
function toggleLightTheme() {
    toggleBtn.setAttribute('title', 'Toggle dark mode (currently off)');
    toggleBtn.setAttribute('aria-label', 'Toggle dark mode (currently off)');
    toggleBtnIcon.classList.remove('ri-sun-line');
    toggleBtnIcon.classList.add('ri-moon-line');
    document.body.classList.remove('dark-mode');
    currentTheme = "light";
    localStorage.setItem("theme", "light");
}

let currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    toggleDarkTheme();
} else if (currentTheme == null) {
    if (prefersDark.matches) {
        toggleDarkTheme();
        currentTheme = "dark";
        localStorage.setItem("theme", "dark");
    } else {
        currentTheme = "light";
        localStorage.setItem("theme", "light");

    }
}

toggleBtn.addEventListener('click', e => {
    e.preventDefault();
    if (currentTheme == "light") {
        toggleDarkTheme();
    } else {
        toggleLightTheme();
    }
});

prefersDark.addEventListener("change", e => {
    if (e.matches) toggleDarkTheme();
});

prefersLight.addEventListener("change", e => {
    if (e.matches) toggleLightTheme();
});
