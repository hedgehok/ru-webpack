import './index.scss';

const bg = document.querySelector('#bg');
const audio = document.querySelector('#audio');
const volume = document.querySelector('#volume');
const sun = document.querySelector('#sun');
const rain = document.querySelector('#rain');
const snow = document.querySelector('#snow');
let isPlaying = false;
let current = undefined;

const songList = {
    'rain': {
        'audio': '/assets/sounds/rain.mp3',
        'image': '/assets/rainy-bg.jpg'
    },
    'sun': {
        'audio': '/assets/sounds/summer.mp3',
        'image': '/assets/summer-bg.jpg'
    },
    'snow': {
        'audio': '/assets/sounds/winter.mp3',
        'image': '/assets/winter-bg.jpg'
    }
};

function play(type) {
    if (type === current) {
        if (isPlaying) {
            isPlaying = false;
            audio.pause();
        } else {
            isPlaying = true;
            audio.play();
        }
    } else {
        audio.pause();
        current = type;
        isPlaying = true;
        audio.src = songList[type].audio;
        audio.volume = volume.value;
        audio.play();
        bg.style.background = `url('${songList[type].image}') bottom center no-repeat`;
    }
}

volume.addEventListener('input', () => {
    if (audio) {
        audio.volume = volume.value; // Устанавливаем громкость
    }
});

sun.addEventListener('click', () => play('sun'));
rain.addEventListener('click', () => play('rain'));
snow.addEventListener('click', () => play('snow'));
