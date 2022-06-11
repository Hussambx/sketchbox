let nu = 256;
let size =800*800; //Area of play area
let amount = 4*4;

let fox = document.getElementsByClassName("main");
start();
function start(){   
    //Determines the required size of each box based off the amount
    let widthx = Math.sqrt((size/amount));

    for(let i =0;i<amount;i++){
        let me = document.createElement("section");
        me.id ="box";
        me.style.backgroundColor = "red";
        me.style.width=widthx+"px";
        me.style.height = widthx+"px";
        document.getElementById('main').appendChild(me);
    }
  
   

}

    // your code to run after the timeout
    const buttons = document.querySelectorAll('section');
buttons.forEach((section) => {

    // and for each one we add a 'click' listener
    section.addEventListener('mouseover',function (e) {
        e.target.style.backgroundColor="blue";
    });
  });



// stop for sometime if needed

