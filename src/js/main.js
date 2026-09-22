console.log("Hai :3, starting ....");

console.log(document.body);

const titleElement = document.getElementById("os-info");
console.log("Title element:", titleElement);

const infoBox = document.querySelector(".box");
console.log("Info box:", infoBox);

const bootButton = document.querySelector("#boot-btn");

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
