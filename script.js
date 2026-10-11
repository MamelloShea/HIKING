// Shared features for every page: light/dark mode, mobile menu and demo booking form.
const themeButton = document.getElementById("themeButton");
const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (themeButton) themeButton.textContent = theme === "dark" ? "☀ Light mode" : "☾ Dark mode";
  try { localStorage.setItem("highlandsTheme", theme); } catch (error) {}
}

let savedTheme = "light";
try { savedTheme = localStorage.getItem("highlandsTheme") || "light"; } catch (error) {}
setTheme(savedTheme);

if (themeButton) {
  themeButton.addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });
}

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => mainNav.classList.toggle("open"));
}

document.querySelectorAll(".year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const destination = document.getElementById("destination").value;
    document.getElementById("formMessage").textContent =
      `Thank you, ${name}! Your request for ${destination} has been checked. This is a demo only; no booking was sent.`;
    bookingForm.reset();
  });
}
