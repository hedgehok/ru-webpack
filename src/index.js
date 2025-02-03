import './index.scss';

const bg = document.querySelector('#bg');
const audio = document.querySelector('#audio');
const volume = document.querySelector('#volume');
const buttons = document.querySelector('#buttons');
let current = undefined;

const data = [
    {
        icon: './assets/icons/sun.svg',
        image: './assets/summer-bg.jpg',
        audio: './assets/sounds/summer.mp3'
    },
    {
        icon: './assets/icons/cloud-rain.svg',
        image: './assets/rainy-bg.jpg',
        audio: './assets/sounds/rain.mp3'
    },
    {
        icon: './assets/icons/cloud-snow.svg',
        image: './assets/winter-bg.jpg',
        audio: './assets/sounds/winter.mp3'
    }
];

function clearPlaying() {
    document.querySelectorAll('.playing').forEach((item) => item.classList.remove('playing'));
}

function play(e, item) {
    if (item.audio === current) {
        if (audio.paused) {
            audio.play();
            e.currentTarget.querySelector('span').classList.add('playing');
        } else {
            audio.pause();
            e.currentTarget.querySelector('span').classList.remove('playing');
        }
    } else {
        current = item.audio;
        audio.src = item.audio;
        audio.volume = volume.value;
        audio.play();
        bg.style.background = `url('${item.image}') bottom center no-repeat`;
        clearPlaying();
        e.currentTarget.querySelector('span').classList.add('playing');
    }
}

function getButton(item) {
    const button = document.createElement('div');
    button.className = 'button';
    button.style.background = `url('${item.image}') bottom center no-repeat`;
    button.appendChild(getButtonIcon(item.icon));
    button.addEventListener('click', (e) => play(e, item));
    return button;
}

function getButtonIcon(img) {
    const icon = document.createElement('span');
    icon.style.backgroundImage = `url('${img}')`;
    icon.style.backgroundRepeat = `no-repeat`;
    icon.style.backgroundSize = `contain`;
    return icon;
}

volume.addEventListener('input', () => {
    if (audio) {
        audio.volume = volume.value;
    }
});

data.forEach((item) => buttons.appendChild(getButton(item)));
