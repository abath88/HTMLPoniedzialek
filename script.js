let open = false; 

function handleMenu(){
    open = !open

    if(open) {
        event.target.setAttribute('class', 'open');
    } else {
        event.target.setAttribute('class', '');
    }
}


window.onload =  () => document.getElementById('animate').setAttribute('class', 'animate');

let plateElements = document.getElementById('plate').childElementCount
let currBlock = 0

function prev() {
    currBlock = currBlock - 1
    if(currBlock < 0) {
        currBlock = plateElements - 1
    }
    document.getElementById('plate').style.left = `calc(-${100*currBlock}vw + ${100*currBlock}px)`;
}

function next() {
    currBlock = currBlock + 1
    if(currBlock >= plateElements) {
        currBlock = 0
    }
    document.getElementById('plate').style.left = `calc(-${100*currBlock}vw + ${100*currBlock}px)`;
}