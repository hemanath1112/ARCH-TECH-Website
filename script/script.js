
const mov = document.querySelector('.top');

window.addEventListener('scroll', () => {
    var y = window.scrollY;
    if (y >= 400) {
        mov.classList.add('hema');
    } else {
        mov.classList.remove('hema');
    }
});