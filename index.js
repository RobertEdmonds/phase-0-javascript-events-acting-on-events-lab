// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0){
        dodger.style.left= `${left - 1}px`;
    }
}
document.addEventListener("keydown", function (event){
    if (event.key === "ArrowLeft"){
        moveDodgerLeft();
    }
})
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 360){
        dodger.style.left = `${left + 1}px`;
    }
}
document.addEventListener("keydown", function (e){
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
})

function moveDodgerUp(){
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    if (bottom < 360){
        dodger.style.bottom = `${bottom + 1}px`;
    }
}
document.addEventListener("keydown", function(event){
    if (event.key === "ArrowUp"){
        moveDodgerUp();
    }
})