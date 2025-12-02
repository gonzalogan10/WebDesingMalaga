    

if(scrollToTopButton){
    window.onscroll = function() {
        if(window.scrollY === 0){
            scrollToTopButton.classList.remove('img-btn-fixed-show');
        } else {
            scrollToTopButton.classList.add('img-btn-fixed-show');
        }
    }
    window.scroll(0,0);
    scrollToTopButton.onclick = function() {
        window.scroll(0,0);
    }
}