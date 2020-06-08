document.addEventListener('scroll', function() {
    var viewPort = window.innerHeight
    var scrollY = window.scrollY
    var fromTop = viewPort + scrollY

    var blocks = document.querySelectorAll('.block:not(#article-1)');
    [ ...blocks ].forEach( element => {
        if(element.offsetTop <= fromTop - 150) {
            element.classList.add('visible')
        }else {
            element.classList.remove('visible')
        }
    })
})