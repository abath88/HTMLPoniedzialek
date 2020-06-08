let open = false; 

function handleMenu(){
    open = !open

    if(open) {
        event.target.setAttribute('class', 'open');
        document.getElementById('logo').setAttribute('class', 'logo open')
    } else {
        event.target.setAttribute('class', '');
        document.getElementById('logo').setAttribute('class', 'logo');
    }
}


window.onload =  () => {
    var art = document.getElementById('article-1')
    if(art) art.classList.add('visible');
    
    var animate = document.getElementById('animate')
    if(animate) animate.classList.add('animate');
}

