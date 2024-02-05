//////////////////// Pure JavaScript ////////////
///
// for(var i=0; i < document.querySelectorAll("button").length ; i++){
// document.querySelectorAll("button")[i].addEventListener("click",function (){
//         var buttonInnerHTML = this.innerHTML; 
//         makeSound(buttonInnerHTML);
//         buttonAnimation(buttonInnerHTML);
// });
// }


////////////////// jQuery //////////////////
///
$("button").click(function () {
    var buttonInnerHTML =$(this).html();
    // console.log(buttonInnerHTML);
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});

document.addEventListener("keydown",function(event){ //event is that the event that triggered the event lestener
    var keyPressed = event.key; //event.key is button of the event that triggered the event lestener
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
});

function makeSound(key){
    switch (key) {

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
    }
}

function buttonAnimation(buttonKey){
    var currentKey=document.querySelector("."+buttonKey);
    if(currentKey==null){
        console.log("Not a drum key!");
    }
    else{
    currentKey.classList.add("pressed"); // Add pressed class to the key that has trigger the event
    setTimeout(function(){
        currentKey.classList.remove("pressed"); // remove pressed class
    }
    ,100)
    }
}