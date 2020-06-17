window.addEventListener("load",() => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = ["fd5151","#00ff0d","#00ffdd","#ff00ff","#ff004c","#00ffbf","#fbff00","#ff8800"];


    pads.forEach((item,index) => {
        item.addEventListener("click",()=> {
            // alert("Bingo")
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
            // console.log(item)
        })
    })

    function createBubble(index) {
        // console.log(index)
        let bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.background = colors[index];
        bubble.style.animation = "jump 1s ease";
        // console.log(bubble)
        bubble.addEventListener("animationend",() => {
            // console.log(this)
            visual.removeChild(bubble)
        })
    }
})