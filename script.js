var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Game Developer", "Application Developer"],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 1000,
    loop: true
});

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 100 + "px"
    blur.style.top = dets.y - 100 + "px"
})