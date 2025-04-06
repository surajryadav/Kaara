const themeToggle = document.getElementById("themeToggle");
const cartIcon = document.getElementById("cartIcon");

// Theme toggler
themeToggle.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  const newTheme = isLight ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
});

// Set icons to always appear white
function setIconColorsAlwaysWhite() {
  themeToggle.style.filter = "invert(100%)"; // always white
  cartIcon.style.filter = "invert(100%)";    // always white
}

setIconColorsAlwaysWhite(); // Initial load

// Auto-changing product cards
const images = [
  { src: "assets/man.jpg", label: "MEN" },
  { src: "assets/woman.jpg", label: "WOMEN" },
  { src: "assets/everyone.jpg", label: "EVERYONE" },
  { src: "assets/man2.jpg", label: "MEN NEW" },
  { src: "assets/woman2.jpg", label: "WOMEN NEW" },
  { src: "assets/everyone2.jpg", label: "Everyone NEW" },
  // Add more if you have
];

const carousel = document.getElementById("carousel");

function generateCarouselItems() {
  carousel.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    const div = document.createElement("div");
    div.className = "carousel-item min-w-[250px] snap-start transition-transform transform hover:scale-105";
    div.innerHTML = `
      <img src="${images[i].src}" alt="${images[i].label}" class="rounded shadow-md"/>
      <p class="text-center mt-2 font-medium">${images[i].label}</p>
    `;
    carousel.appendChild(div);
  }
}
generateCarouselItems();

// Optional: rotate images every 5s
setInterval(() => {
  images.push(images.shift()); // Move first to last
  generateCarouselItems();
}, 5000);
