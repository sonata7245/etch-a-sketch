const row = document.querySelector('.row')

for (let i = 0; i <= 10; i++){
    box = document.createElement('div')
    box.classList.add('grid')
    row.append(box);
}