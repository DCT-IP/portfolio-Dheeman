console.log("Hai :3, starting ....");
console.log(document.body);

const titleElement = document.getElementById("os-info");
console.log(titleElement);

const boxElement = document.querySelector(".box");
console.log("Box element:", boxElement);

const cursorElement = document.querySelector(".blinking-cursor");
console.log("Cursor element:", cursorElement);

const bootButton = document.querySelector("#boot-btn");
const infoBox = document.querySelector(".box");

bootButton.addEventListener("click", function() {
    titleElement.textContent = "SYSTEM ONLINE";
    infoBox.classList.remove("hidden");
    bootButton.textContent = "[ ENTER SYSTEM ]";
});

const toggleButton = document.querySelector("#toggle-info");

toggleButton.addEventListener("click", function() {
    infoBox.classList.toggle("hidden");
});

const addLogButton = document.querySelector("#add-log");
const centContainer = document.querySelector(".cent");

addLogButton.addEventListener("click", function() {
    const newLog = document.createElement("p");
    newLog.textContent = "> System message: Connection secure.";
    centContainer.appendChild(newLog);
});