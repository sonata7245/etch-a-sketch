
let num = 10;

const container = document.querySelector('#gridContainer')


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