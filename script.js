let closePlayer=document.getElementById("close-player")
let musicPlayer=document.querySelector(".music-player")
let boxConteiner=document.querySelector(".box_conteiner")

closePlayer.addEventListener("click",()=>{
    closePlayer.classList.toggle("fa-times")
    musicPlayer.classList.toggle("active")
    boxConteiner.classList.toggle("active")
})

let boxes=document.querySelectorAll(".box")

boxes.forEach(box => {
    box.addEventListener("click",() =>{
    let src= box.getAttribute("data-src")
    let text= box.querySelector(".content h3").innerText
    closePlayer.classList.add("fa-times")
    musicPlayer.classList.add("active")
    boxConteiner.classList.add("active")
    musicPlayer.querySelector("h3").innerText=text
    musicPlayer.querySelector("audio").src=src
    musicPlayer.querySelector("audio").play()
    })
    
});
