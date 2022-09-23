const container = document.querySelector('#gridContainer')
const resetButton = document.querySelector('#reset');
const gridSizeSelector = document.querySelector('#gridSize');
const rainbowButton = document.querySelector('#rainbow');
const colorPicker = document.querySelector('#colorPicker');
const eraserButton = document.querySelector('#eraser');

let cursorColor = '#000000';
let activeRainbow = false;
let mouseDown = false;

drawGrid(16);

function getRandomInt() {
    return Math.floor(Math.random() * 256);
}

function getRainbow() {
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
            if (j == 1 && i == 1) {
                box.style.borderTopLeftRadius = "10px";
            } else if (j == num && i == 1) {
                box.style.borderTopRightRadius = "10px";
            } else if (j == 1 && i == num) {
                box.style.borderBottomLeftRadius = "10px";
            } else if (j == num && i == num) {
                box.style.borderBottomRightRadius = "10px";
            }
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


container.addEventListener('mousedown', event => {
    mouseDown = true;
})

window.addEventListener('mouseup', event => {
    mouseDown = false;
})

window.addEventListener('mouseleave', event => {
    mouseDown = false;
})



container.addEventListener('mouseover', event => {
    while (mouseDown == true) {
        console.log(event)
        box = event.target;
        if (activeRainbow) {
            box.style.background = getRainbow();
        }
        else {
            box.style.background = cursorColor;
        }

    }
})

resetButton.addEventListener('click', () => {
    cursorColor = '#000000';
    gridSizeSelector.value = 16;
    drawGrid(16);
    colorPicker.value = '#000000';
})


gridSizeSelector.addEventListener('change', function (e) {
    let num = this.value
    drawGrid(num);
})

rainbowButton.addEventListener('click', (e) => {
    return activeRainbow = true
})
colorPicker.addEventListener('change', function (e) {
    activeRainbow = false
    cursorColor = (this.value);
})
eraserButton.addEventListener('click', (e) => {
    activeRainbow = false
    cursorColor = 'rgb(190, 187, 187)';
})


