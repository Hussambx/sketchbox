let nu = 256;
let fox = document.getElementsByClassName("main");
start();
function start(){
    let me = document.createElement("div");
    
    me.classList.add("box");
    me.style.backgroundColor = "red";
    document.getElementById('main').appendChild(me);
    
}