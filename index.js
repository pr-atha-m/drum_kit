for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",myClick);
}

function myKey(key){

    switch (key){

        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(key);
        
        }

}

document.addEventListener("keydown",function(event){
    var key = event.key;
    myKey(key);
    animation(key)
});

for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("mouseout",myHover);
}


function myClick(){

   this.style.color = "white";

   var key = this.innerHTML;

   myKey(key);
   animation(key)

  
}


function myHover(){
    this.style.color = "#DA0463";
 }


 function animation(key){
    var currentButton = document.querySelector("."+key);

    currentButton.classList.add("pressed");
    setTimeout(function(){
        currentButton.classList.remove("pressed");
    }, 100);

 }