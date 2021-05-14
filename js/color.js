var numsquares=6;
var colors=generate_random_color(numsquares);
var messagedisplay=document.querySelector("#message");
var pickedcolor=pickcolor();
var clickedcolor;
var squres=document.querySelectorAll("#square");

var par=document.querySelector("h1");
var reset=document.querySelector("#reset");

var modebutton=document.querySelectorAll(".mode");



easy_btn.addEventListener("click",function(){
    par.style.background="rgb(70,130,180)";
    reset.textContent="New Colors";
    messagedisplay.textContent="";
    hard_btn.classList.remove("selected");
    easy_btn.classList.add("selected");
    numsquares=3;
    colors=generate_random_color(numsquares);
    pickedcolor=pickcolor();
    colorsdisplay.textContent=pickedcolor;
    for(var i=0; i < squres.length; i++){
        if(colors[i]){
            squres[i].style.background=colors[i];
        }
        else{
            squres[i].style.background="none";
        }
    }  
});

hard_btn.addEventListener("click",function(){
    par.style.background="rgb(70,130,180)";
    reset.textContent="New Colors";
    messagedisplay.textContent="";
    easy_btn.classList.remove("selected");
    hard_btn.classList.add("selected");
    numsquares=6;
    colors=generate_random_color(numsquares);
    pickedcolor=pickcolor();
    colorsdisplay.textContent=pickedcolor;
    for(var i=0; i < squres.length; i++){
        squres[i].style.background=colors[i];
    } 
});

reset.addEventListener("click",function(){
    //change the text content of reset button 
    this.textContent="New Colors";
    //changing content of displayed message
    messagedisplay.textContent="";
    //generate all new colors
    colors=generate_random_color(numsquares);
    //pick a new random color from array
    pickedcolor=pickcolor();
    //change colorDisplay to match the picked color in the strip
    colorsdisplay.textContent=pickedcolor;
    //change colors of square
    for(var i=0; i<square.length;i++){
        squres[i].style.background = colors[i];
    }
    par.style.background="rgb(70,130,180)";
});

colorsdisplay.textContent=pickedcolor;

for(var i=0; i<square.length;i++){
    //add intial colors to the squares
    squres[i].style.background = colors[i];
    //add click listener to the squares
    squres[i].addEventListener("click",function(){
        //grab color of the clicked square
        clickedcolor=this.style.background;
        //compare color to picked colour
        if(clickedcolor === pickedcolor ){
            messagedisplay.textContent="Correct !!";
            changecolor(clickedcolor);
            reset.textContent="Play again??"
        }
        else{
            this.style.background="#232323";
            messagedisplay.textContent="Try Again !!";
        }
    });
}

function changecolor(color){
    // the clicked color is found true
    for(var i=0; i<numsquares; i++){
        //change the color of all square to the clicked color
        squres[i].style.background=color;
        //change the color of above strip to the picked color
        par.style.background=color;
    }
}

function pickcolor(){
    //picking any random color out of length of array 
    var ran=Math.floor(Math.random() * colors.length);
    return colors[ran];
}

function generate_random_color(num){
    var arr= [];
    for(var i=0; i<num; i++){
        
        arr.push(randomcolor());
    }
    return arr;
}
function randomcolor(){
    var x=Math.floor(Math.random()*256);
    var y=Math.floor(Math.random()*256);
    var z=Math.floor(Math.random()*256);
    return "rgb(" + x + ", " + y + ", "+ z +")";
}