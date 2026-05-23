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

const bootScreen = document.getElementById("boot-screen")
const mainSite = document.getElementById("main-site")

setTimeout(() => {

    bootScreen.style.display = "none"

    mainSite.style.display = "block"

}, 3200)