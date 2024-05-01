var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick)
}
document.addEventListener("keydown",handleClick)
function handleClick(e){
    var buttoninnerHTML = this.innerHTML;
    var buttonPressInnerHTML = e.key;
    switch(buttoninnerHTML||buttonPressInnerHTML){
        case "w":
            var tom1 = new Audio("Sounds/tom-1.mp3")
            tom1.play()
            break;
        default:
            console.log(buttoninnerHTML);
            
    }
    switch(buttoninnerHTML||buttonPressInnerHTML){
        case "a":
            var tom2 = new Audio("Sounds/tom-2.mp3")
            tom2.play()
            break;
        default:
            console.log(buttoninnerHTML);
            
    }
    switch(buttoninnerHTML||buttonPressInnerHTML){
        case "s":
            var tom3 = new Audio("Sounds/tom-3.mp3")
            tom3.play()
            break;
        default:
            console.log(buttoninnerHTML);
            
    }
    switch(buttoninnerHTML||buttonPressInnerHTML){
        case "d":
            var tom4 = new Audio("Sounds/tom-4.mp3")
            tom4.play()
            break;
        default:
            console.log(buttoninnerHTML);
            
    }
    switch(buttoninnerHTML||buttonPressInnerHTML){
        case "j":
            var crash = new Audio("Sounds/crash.mp3")
            crash.play()
            break;
        default:
            console.log(buttoninnerHTML);
            
    }
    switch(buttoninnerHTML||buttonPressInnerHTML){
        case "k":
            var kickbass = new Audio("Sounds/kick-bass.mp3")
            kickbass.play()
            break;
        default:
            console.log(buttoninnerHTML);
            
    }
    switch(buttoninnerHTML||buttonPressInnerHTML){
        case "l":
            var snare = new Audio("Sounds/snare.mp3")
            snare.play()
            break;
        default:
            console.log(buttoninnerHTML);
            
    }

}



