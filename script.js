const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if (dino.classList !="jump") {
        dino.classList.add("jump");

        setTimeout(function (){
            dino.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function () {
    // posicion actual dino Y
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // posicion actual cactus X
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")
    );

    // detectar colision
    if (cactusLeft <50 && cactusLeft > 0 && dinoTop >=140){
    // colision
    alert("Game Over!");
    }
    
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});