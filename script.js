let nu = 256;
let size =800*800;
let amount = 16;

let fox = document.getElementsByClassName("main");
start();
function start(){   
    //Determines the required size of each box based off the amount
    let widthx = Math.sqrt((size/amount));

    for(let i =0;i<amount;i++){
        let me = document.createElement("div");
        me.classList.add("box");
        me.style.backgroundColor = "red";
        me.style.width=widthx+"px";
        me.style.height = widthx+"px";
        document.getElementById('main').appendChild(me);
    }
   


    
    
}