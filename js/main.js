console.log("> system online :)")

const emoticons = document.querySelectorAll(".emoticons span")
emoticons.forEach((face) => {
    face.addEventListener("mouseover", () => {
        face.style.color = "cyan"
    })
    face.addEventListener("mouseout", () => {
        face.style.color = "#00ff99"
    })
})

const bootInput =
    document.getElementById("boot-input")
const bootScreen =
    document.getElementById("boot-screen")
const mainSite =
    document.getElementById("main-site")
bootInput.focus()
bootInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const command =
            bootInput.value.trim().toLowerCase()
        if (command === "enter") {
            bootScreen.classList.add("boot-exit")
            setTimeout(() => {
                bootScreen.style.display = "none"
                mainSite.style.display = "block"
            }, 2000)
        }
        else if (command === "exit") {
            alert("you cannot leave yet :)")
        }
        else {
            alert("unknown command")
        }
        bootInput.value = ""
    }
})