
const container = document.querySelector('#gridContainer')

function drawGrid(num) {
    for (let i = 0; i <= num; i++) {
        row = document.createElement('div')
        row.classList.add('row')
        for (let j = 0; j <= num; j++) {
            box = document.createElement('div')
            box.classList.add('grid')
            row.append(box);
        }
        container.append(row);
    }
    [document.querySelector('.grid')].forEach(item => {
        item.addEventListener('hover', event =>{
            box.style.color = red;
        })
    })
}

drawGrid(10);

