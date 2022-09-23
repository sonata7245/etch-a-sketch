

const container = document.querySelector('#gridContainer')
const resetButton = document.querySelector('#reset');
const gridSizeSelector = document.querySelector('#gridSize');
const rainbowButton = document.querySelector('#rainbow');
const colorPicker = document.querySelector('#colorPicker');
const eraserButton = document.querySelector('#eraser');

let cursorColor = '#000000';
let activeRainbow = false;

drawGrid(16);

function getRandomInt() {
    return Math.floor(Math.random() * 256);
  }

function getRainbow (){
    let r = getRandomInt()
    let g = getRandomInt()
    let b = getRandomInt()
    return `rgb(${r}, ${g}, ${b})`;
}

function drawGrid(num) {
    removeAllChildNodes(container);
    for (let i = 1; i <= num; i++) {
        row = document.createElement('div')
        row.classList.add('row')
        for (let j = 1; j <= num; j++) {
            box = document.createElement('div')
            box.classList.add('grid')
            row.append(box);
        }
        container.append(row);
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



container.addEventListener('mouseover', event => {
    box = event.target;
    if (activeRainbow){
    box.style.background = getRainbow();}
    else {
    box.style.background = cursorColor;
    }

})

resetButton.addEventListener('click', () => {
    cursorColor = '#000000';
    drawGrid(16);
    colorPicker.value = '#000000';
})


gridSizeSelector.addEventListener('change', function (e) {
    let num = this.value
    drawGrid(num);
} )

rainbowButton.addEventListener('click', (e) => {
    return activeRainbow = true
} )
colorPicker.addEventListener('change', function (e) {
    activeRainbow = false
    cursorColor = (this.value);
} )
eraserButton.addEventListener('click', (e) => {
    activeRainbow = false
    cursorColor = '#FFFFFF';
} )



