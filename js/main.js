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