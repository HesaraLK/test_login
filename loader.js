const spinnerwrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    spinnerwrapper.style.opacity = '0';

    setTimeout(() => {
        spinnerwrapper.style.display = 'none';
    }, 200);
});