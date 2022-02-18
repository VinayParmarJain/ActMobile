const greeting = document.getElementById("greeting");
const hex = document.getElementById("hex");

// Greeting Message
const hour = new Date().getHours();
const welcomeTypes = [
  "Good Morning",
  "Good Afternoon",
  "Good Evening",
  "Good Night",
];
let welcomeText = "";

if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else if (hour < 22) welcomeText = welcomeTypes[2];
else welcomeText = welcomeTypes[3];

greeting.innerHTML = welcomeText + ", Guest!";

// Modal auto close

window.addEventListener("load", function () {
  setTimeout(function autoClose(event) {
    document.getElementById("modal").style.display = "none";
  }, 10000);
});

// Modal close button

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

// Floating menu

hex.addEventListener("keyup", function () {
  document.querySelector(".background-color").style.background = hex.value;
});
