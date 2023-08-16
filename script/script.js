
const mov = document.querySelector('.top');

window.addEventListener('scroll', () => {
    var y = window.scrollY;
    if (y >= 600) {
        mov.classList.add('hema');
    } else {
        mov.classList.remove('hema');
    }
});