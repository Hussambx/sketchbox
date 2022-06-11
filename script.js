let nu = 256;
let size =800*800; //Area of play area
let amount = 4*4;

let color = "red";
let fox = document.getElementsByClassName("main");
const colorsel = document.querySelector('#csel');

start();
function start(){   
    //Determines the required size of each box based off the amount
    let widthx = Math.sqrt((size/amount));

    for(let i =0;i<amount;i++){
        let me = document.createElement("section");
        me.id ="box";
        me.style.backgroundColor = "white";
        me.style.width=widthx+"px";
        me.style.height = widthx+"px";
        document.getElementById('main').appendChild(me);
    }
  
   

}

    //Basically adds an event listenters for all section elements aka the boxs/grids
    const buttons = document.querySelectorAll('section');
buttons.forEach((section) => {

    // and for each one we add a 'click' listener
    section.addEventListener('mouseover',function (e) {
        e.target.style.backgroundColor=color;
    });
  });


//Adds an event listener to listen for a change on the color selector 

colorsel.addEventListener('change', (e) => {
 color = e.target.value;
});


 

