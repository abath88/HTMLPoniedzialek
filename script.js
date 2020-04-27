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

    