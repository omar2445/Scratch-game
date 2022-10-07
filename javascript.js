//container for the grids
const container = document.getElementById('container');
const grid = document.getElementById('container');
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
//settings 
const colorMode = document.getElementById('colorMode');
let colorChanger = document.getElementById('colorChanger');
const rainbowMode = document.getElementById('rainbowMode');
let sizeSlider = document.getElementById('sizeSlider');
const erase = document.getElementById('erase'); 
const clear = document.getElementById('clear');
let cmd;
//make grids
function defGrid(color,x){
    let defaultColor = color;
    grid.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    for(i=0;i<x*x;i++){
        const row  = document.createElement('div');
        row.addEventListener('mouseover', changecolor);
        row.addEventListener('mousedown', changecolor);
        container.appendChild(row).className = "gridRow";
    };
}
//size changer
sizeSlider.addEventListener('input', ()=>{
    clearGrid();
    defGrid(colorChanger.value,sizeSlider.value);
});
//delit the grid
function clearGrid(){
    grid.innerHTML = '';
}
//color changer
colorMode.addEventListener('click',()=>{
    cmd = "colormode";
    colorMode.style.background = "gray"
    erase.style.background = "rgb(158, 196, 158)";
    rainbowMode.style.background = "rgb(158, 196, 158)";
});
rainbowMode.addEventListener('click',()=>{
    cmd = "rainbowmode";
    rainbowMode.style.background ="gray";
    colorMode.style.background = "rgb(158, 196, 158)";
    erase.style.background = "rgb(158, 196, 158)";
});
erase.addEventListener('click',()=>{
    cmd = "erase";
    erase.style.background ="gray";
    colorMode.style.background = "rgb(158, 196, 158)";
    rainbowMode.style.background = "rgb(158, 196, 158)";
});
clear.addEventListener('click',()=>{
    clearGrid();
    defGrid("white",sizeSlider.value);
    erase.style.background = "rgb(158, 196, 158)";
});

function changecolor(e){
    if (e.type === 'mouseover' && !mouseDown) return
    if(cmd === "colormode"){
        e.target.style.backgroundColor = colorChanger.value;
    }
    else if (cmd === "rainbowmode"){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    else{
        e.target.style.backgroundColor = 'white';
    }
}