var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    container = document.querySelector('.galery-container'),
    list = document.querySelector('.list'),
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.timeRunning')

const spinnerwrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    spinnerwrapper.style.opacity = '0';

    setTimeout(() => {
        spinnerwrapper.style.display = 'none';
    }, 200);
});

let timeRunning = 3000
let timeAutoNext = 7000

nextBtn.onclick = function () {
    showSlider('next')
}

prevBtn.onclick = function () {
    showSlider('prev')
}

let runTimeOut
let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight
    runningTime.style.animation = null
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}

function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.galery-container .list .item')
    if (type === 'next') {
        list.appendChild(sliderItemsDom[0])
        container.classList.add('next')
    }
    else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        container.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('prev')
    }, timeRunning)

    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation()
}

resetTimeAnimation()


document.addEventListener('DOMContentLoaded', () => {

    for (let i = 1; i <= 7; i++) {
        const openButtons = document.querySelectorAll(`.see-more-btn${i}`);
        const popup = document.getElementById(`popupGallery${i}`);

        if (!popup) continue;

        openButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                popup.style.display = 'flex';
                document.documentElement.style.overflow = 'hidden';
                document.body.style.overflow = 'hidden';
            });
        });

        const closeBtn = popup.querySelector('.close-btn');
        closeBtn.addEventListener('click', closeAllPopups);
    }

    function closeAllPopups() {
        for (let i = 1; i <= 7; i++) {
            const popup = document.getElementById(`popupGallery${i}`);
            if (popup) popup.style.display = 'none';
        }
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            closeAllPopups();
        }
    });
});


