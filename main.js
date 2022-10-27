const result = document.querySelector(".result");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

decrease.addEventListener("click", () => {
    result.innerHTML--;
    color();
});

reset.addEventListener('click', () => {
    result.innerHTML = 0;
    color();
});

increase.addEventListener('click', () => {
    result.innerHTML++;
    color();
});

function color() {
    if (result.innerHTML < 0){
        result.style.color = "crimson";
    } else if (result.innerHTML > 0){
        result.style.color = "limegreen";
    } else {
        result.style.color = "black";
    }
}

function hoverdec(){
    decrease.style.backgroundColor = "crimson";
    decrease.style.transition = "2s";
}
function reverseDecrease(){
    decrease.style.backgroundColor = "silver";
}

function hoverres(){
    reset.style.backgroundColor = "white";
    reset.style.transition = "2s";
}
function reverseRes(){
    reset.style.backgroundColor = "silver";
}

function hoverinc(){
    increase.style.backgroundColor = "limegreen";
    increase.style.transition = "2s";
}
function reverseInc(){
    increase.style.backgroundColor = "silver";
}