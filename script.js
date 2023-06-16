// Check if dark mode is enabled in local storage
const isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

// Toggle dark mode based on the current state
function toggleDarkMode() {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll("nav ul li a");
  const main = document.querySelector("main");
  const products = document.querySelectorAll(".product");
  const footer = document.querySelector("footer");

  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  navLinks.forEach((link) => link.classList.toggle("dark-mode"));
  main.classList.toggle("dark-mode");
  products.forEach((product) => product.classList.toggle("dark-mode"));
  footer.classList.toggle("dark-mode");

  // Update the dark mode state in local storage
  const isDarkModeEnabled = body.classList.contains("dark-mode");
  localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
}

// Apply the initial dark mode state on page load
if (isDarkModeEnabled) {
  toggleDarkMode();
}

// Create a dark mode toggle button
const darkModeToggle = document.createElement("button");
darkModeToggle.id = "dark-mode-toggle";
darkModeToggle.textContent = "🌘🌗🌖";

// Add the button to the header
const header = document.querySelector("header");
header.appendChild(darkModeToggle);

// Event listener for dark mode toggle button
darkModeToggle.addEventListener("click", toggleDarkMode);
