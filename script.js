window.addEventListener("load", function () {
  setTimeout(function autoClose(event) {
    document.getElementById("modal").style.display = "none";
  }, 10000);
});

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
const welcomeTypes = [
  "Good morning",
  "Good afternoon",
  "Good evening",
  "Good night",
];
let welcomeText = "";

if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else if (hour < 22) welcomeText = welcomeTypes[2];
else welcomeText = welcomeTypes[3];

greeting.innerHTML = welcomeText;
