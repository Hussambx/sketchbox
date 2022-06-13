let size =600*600; //Area of play area
let amount = 16*16;  //Amount of grids


const fox = document.getElementsByClassName("main");
const colorsel = document.querySelector('#csel');
const colorsel2 = document.querySelector('#csel2');
const sizedropdown = document.querySelector('#sizedropdown');
let color = colorsel.value;
let backcolor = colorsel2.value;
sizedropdown.value = 64;

start();
function start(){   
    //Determines the required size of each box based off the amount
    let widthx = Math.sqrt((size/amount));
  
    for(let i =0;i<amount;i++){
        let me = document.createElement("section");
        me.id ="box";
        backcolor = colorsel2.value;
        me.style.backgroundColor = backcolor;
        me.style.width=widthx+"px";
        me.style.height = widthx+"px";
        document.getElementById('main').appendChild(me);
    }
    setup();
   

}

//Tracks mouse down status 
var mouseDown = 0;
document.body.onmousedown = function() { 
  mouseDown = 1;
}
document.body.onmouseup = function() {
mouseDown = 0;
}




    function setup(){
    //Basically adds an event listenters for all section elements aka the boxs/grids
    const buttons = document.querySelectorAll('section');
buttons.forEach((section) => {

    // and for each one we add a 'click' listener
    section.addEventListener('mouseover',function (e) {
        if(mouseDown==1){
            e.target.style.backgroundColor=color;   

        }
                
    });

    section.addEventListener('mousedown',function (e) {
        e.target.style.backgroundColor=color;        
});


  });
}

//Adds an event listener to listen for a change on the color selector 

colorsel.addEventListener('change', (e) => {
 color = e.target.value;
});


//This function adds an event listener to the select dropdown 
sizedropdown.addEventListener('change', (e) => {
    amount = e.target.value;
    clear();
   });
   

   //This function clears the canvas 
function clear(){
    console.log("bow");
    while (document.querySelector('#main').firstChild) {
       document.querySelector('#main').removeChild(document.querySelector('#main').firstChild);
    }
    //Calling back the start function
    start();
}

//onClick event for button 
const btn = document.querySelector('.rest');
btn.onclick = () => clear();

