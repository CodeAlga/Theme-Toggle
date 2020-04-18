// DOM ELEMENTS
const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const solarButton = document.getElementById("solar");
const body = document.body;

// LOOKING AT LOCAL STORAGE FOR PERSISTENT THEME
const theme = localStorage.getItem("theme");
const isSolar = localStorage.getItem("isSolar");

if (theme) {
  console.log(theme);

  body.classList.replace("light" || "dark", theme);
  isSolar && body.classList.add("solar");
}

//BUTTON EVENTS
darkButton.onclick = () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
};

lightButton.onclick = () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
};

solarButton.onclick = () => {
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
    solarButton.style.cssText = " --bg-solar: var(--color7)";
    solarButton.innerText = "Solarize";
    localStorage.removeItem("isSolar");
  } else {
    body.classList.add("solar");
    solarButton.classList.add("solar");
    solarButton.innerHTML = "Normalize";
    localStorage.setItem("isSolar", true);
  }
};
