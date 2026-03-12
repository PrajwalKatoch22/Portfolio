// Notification message popup
function showMessage(message) {

const messageDiv = document.createElement("div");

Object.assign(messageDiv.style, {
fontFamily: "MonaSansExpanded",
position: "fixed",
bottom: "20px",
right: "20px",
backgroundColor: "#080a0f52",
backdropFilter: "blur(10px)",
color: "#fff",
padding: "10px 20px",
borderRadius: "6px",
boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
zIndex: "1000",
opacity: "0",
transition: "opacity 0.4s ease"
});

messageDiv.textContent = message;

document.body.appendChild(messageDiv);

setTimeout(() => {
messageDiv.style.opacity = "1";
}, 100);

setTimeout(() => {

messageDiv.style.opacity = "0";

setTimeout(() => {
document.body.removeChild(messageDiv);
}, 400);

}, 3000);

}



// ------------------------------
// HERO SPINNING TEXT
// ------------------------------

function initSpinningText() {

const spinningText = document.getElementById("Spinning-Text");

if (!spinningText) return;

const words = [

"Prajwal Katoch",
"Unreal Engine Gameplay Programmer",
"UE5 Blueprint Developer",
"AI Gameplay Systems",
"Game Mechanics Developer",
"Interactive Systems Designer"

];

let currentIndex = 0;

spinningText.textContent = words[0];

function animate() {

spinningText.style.animation = "textFadeOut 0.5s forwards";

setTimeout(() => {

currentIndex = (currentIndex + 1) % words.length;

spinningText.textContent = words[currentIndex];

spinningText.style.animation = "textFadeIn 0.5s forwards";

}, 500);

}

setInterval(animate, 3000);

}



// ------------------------------
// REINITIALIZE AFTER BF CACHE
// ------------------------------

window.initializeAfterBFCache = function () {

initSpinningText();

if (typeof initNavigation === "function") {
initNavigation();
}

};



// ------------------------------
// MAIN DOM LOAD
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {

initSpinningText();

const header = document.querySelector("header");



// Sticky header

window.addEventListener("scroll", function () {

header.classList.toggle("sticky", window.scrollY > 100);

});



// Mobile menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-section");
const body = document.body;

hamburger.addEventListener("click", function () {

hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
body.classList.toggle("no-scroll");

});



// Close menu when clicking link

document.querySelectorAll(".nav-section a").forEach(link => {

link.addEventListener("click", () => {

hamburger.classList.remove("active");
navMenu.classList.remove("active");
body.classList.remove("no-scroll");

});

});



// ------------------------------
// ACTIVE NAVIGATION SECTION
// ------------------------------

const navLinks = document.querySelectorAll(".nav-section li a");
const sections = document.querySelectorAll("section");

let scrollRAF = null;

window.addEventListener("scroll", function () {

if (!scrollRAF) {

scrollRAF = requestAnimationFrame(() => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if (scrollY >= sectionTop - 200) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}

if (current === "" && link.getAttribute("href") === "#") {
link.classList.add("active");
}

});

scrollRAF = null;

});

}

});

});