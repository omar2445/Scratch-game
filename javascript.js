//container for the grids
const container = document.getElementById('container');
const grid = document.getElementById('container')
//settings 
let colorMode = document.getElementById('colorMode');
const colorChanger = document.getElementById('colorChanger');
const rainbowMode = document.getElementById('rainbowMode');
let sizeSlider = document.getElementById('sizeSlider');

//make grids

/*function defGrid(x,color){
    let defaultColor = color;
    grid.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    for(i=0;i<x*x;i++){
        const row  =document.createElement('div');
        row.addEventListener('mouseover', ()=>{row.style.background = defaultColor});
        container.appendChild(row).className = "gridRow";
    };
}*/
//color mode
colorMode.addEventListener('click',()=>{defGrid(16,colorChanger.vlue)})