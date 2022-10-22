var character =document.querySelector(".character");
var object = document.querySelector(".object");
var a=document.querySelector(".brojilo");
var numberOfJumps=0;
// var x=1;
var sound=document.querySelector(".sound");
var gameover=document.querySelector(".gameover")
var text = document.querySelector(".text");

text.innerHTML="Click Enter to play";

window.addEventListener("keydown", (e)=>{
if(e.keyCode==13){
    // text.style.display="none";
    x=1;
    text.innerHTML=" ";
    object.style.animation="animation1 infinite 1.5s linear";
};
});

// if(text.innerHTML=" "){
//     numberOfJumps=0;
// }

window.addEventListener("keydown", (event)=>{
 
if(event.keyCode ==32 ){ 
    a.innerHTML=numberOfJumps;
    event.preventDefault;
    if(character.classList.contains("jump")) {
         
    } else{
        character.classList.add("jump");
        sound.play();
        setTimeout(function(){
            character.classList.remove("jump");
           }, 500 );
    }
}
});
var checkDead;


checkDead = setInterval(() => {
    var characterTop = parseInt( window.getComputedStyle(character).getPropertyValue("top"));
    console.log(characterTop);
    var objectLeft = parseInt( window.getComputedStyle(object).getPropertyValue("left"));
    console.log(objectLeft);
    if(characterTop>670 && objectLeft<161 && objectLeft>61){
        gameover.play();
        alert("YOU LOST")
        numberOfJumps=0;
        object.style.animation="animation1 infinite 1.5s linear" ;
        object.style.left="3382px";
        a.style.color="white"
        // x=1;
        text.innerHTML="Click Enter to play";
        object.style.animation="none";
        numberOfJumps=0;
        window.location.reload(true);
    }
}, 10);


// x=1;
 
var counter = setInterval(() => {
    a.innerHTML=numberOfJumps;
numberOfJumps+=x;
}, 1600);


var speed = setInterval(() =>{
if(numberOfJumps>8){
    // object.style.left="2380px";
    object.style.animation="animation2 infinite 1.2s linear " ;
    a.style.color="rgb(22, 236, 22)";
    // object.style.left="2380px";

    
}  if(numberOfJumps>15) {
    object.style.animation="animation3 infinite 1s linear" ;
    // object.style.left="2380px";
    x=2;
    a.style.color="yellow";
}  if(numberOfJumps>25) {
    object.style.animation="animation4 infinite 0.9s linear " 
    // object.style.left="2380px";
}
if(numberOfJumps>35) {
    a.style.color="red";
    object.style.animation="animation5 infinite 0.8s linear " 
    // object.style.left="2380px";
    x=2;
}
if(numberOfJumps>49) {
    a.style.color="rgb(32, 14, 4)";
    object.style.animation="animation6 infinite 0.7s linear " 
    // object.style.left="2380px";
    x=2;
}
if(numberOfJumps>59) {
    a.style.color="rgb(32, 14, 4)";
    object.style.animation="animation7 infinite 0.67s linear " 
    // object.style.left="2380px";
    x=2;
}
},100);



