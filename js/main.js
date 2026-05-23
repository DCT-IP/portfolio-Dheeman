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
const bootLog =
    document.getElementById("boot-log")
let exitAttempts = 0
bootInput.focus()
function addLog(text, delay = 0) {
    setTimeout(() => {
        const line =
            document.createElement("p")
        line.classList.add("log-line")
        line.textContent = text
        bootLog.appendChild(line)
    }, delay)
}

bootInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const command =
            bootInput.value.trim().toLowerCase()
        bootInput.value = ""

        // ENTER COMMAND
        if (command === "enter") {
            bootInput.disabled = true
            addLog("> initializing modules...", 300)
            addLog("> loading kernel...", 1000)
            addLog("> mounting filesystem...", 1700)
            addLog("> launching interface...", 2400)
            addLog("> welcome back.", 3100)
            setTimeout(() => {
                bootScreen.classList.add("boot-exit")
            }, 3800)
            setTimeout(() => {
                bootScreen.style.display = "none"
                mainSite.style.display = "block"
            }, 5500)
        }
        // EXIT COMMAND
        else if (command === "exit") {
            exitAttempts++
            if (exitAttempts < 3) {
                addLog("> access denied.", 0)
                addLog("> insufficient privileges.", 400)
            }
            else {
                bootInput.disabled = true
                addLog("> logging off...", 300)
                addLog("> saving session...", 1000)
                addLog("> disconnecting...", 1700)
                setTimeout(() => {
                    bootScreen.classList.add("shutdown")
                }, 2500)
                setTimeout(() => {
                    window.location.href =
                        "https://www.google.com"
                }, 5000)
            }
        }

        else {
            addLog("> unknown command.", 0)
        }
    }
})