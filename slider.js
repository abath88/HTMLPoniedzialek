var blocks = document.querySelectorAll('.block:not(#article-1) .img');
var rotate = 90;

[...blocks].forEach((element) => {
  element.style.transform = `rotateY(${rotate}deg)`;
  rotate += 90;
})

let plateElements = document.getElementById('plate').childElementCount;
let currBlock = 0;


function prev() {
  currBlock = currBlock - 1;
  if (currBlock < 0) {
    currBlock = plateElements - 1;
  }
  document.getElementById('plate').style.left = `calc(-${100 * currBlock}vw + ${
    100 * currBlock
  }px)`
}

function next() {
  currBlock = currBlock + 1;
  if (currBlock >= plateElements) {
    currBlock = 0
  }
  document.getElementById('plate').style.left = `calc(-${100 * currBlock}vw + ${
    100 * currBlock
  }px)`
}



