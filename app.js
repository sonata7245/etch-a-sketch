
const container = document.querySelector('#gridContainer')
conatainer.addEventListener('hover', event => {
    box = event.target;
    box.style.background = 'red';
  })

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
    // [document.querySelector('.grid')].forEach(item => {
    //     item.addEventListener('hover', event =>{
    //         item.style.background = red;
    //     })
    // })
}

drawGrid(10);

