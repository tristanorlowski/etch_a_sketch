const container = document.querySelector('#container');
const maxDim = 800;
let selec = 0;

function createGrid(x){
    let dim = maxDim/x;

    for(let i=0;i<x;i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j=0;j<x;j++){
            let col = document.createElement('div')
            /*col.classList.add('col');*/
            col.style.height = `${dim}px`;
            col.style.width = `${dim}px`;
            col.addEventListener('mouseover', () => onHover(selec, col));
            row.appendChild(col);
        }
    }
}

function onHover(selec, sqr){
    if(selec === 0) sqr.style.background = 'black';
    else if(selec === 1) sqr.style.background = randColor();
}

function randColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

selec = 1;
createGrid(100);

