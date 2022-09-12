const mainButton=document.querySelector("button");
const body=document.body;
const currentColor=document.querySelector(".current-color");

function randomColorGenerator(){
    const red=Math.ceil(Math.random()*255);
    const green=Math.ceil(Math.random()*255);
    const blue=Math.ceil(Math.random()*255);
    const rgb=`rgb(${red},${green},${blue})`;
    currentColor.textContent=rgb;
    return rgb;
}
mainButton.addEventListener("click",()=>{
    const randomColor=randomColorGenerator();
    body.style.backgroundColor=randomColor;
});