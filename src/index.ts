import { data, IData } from './data';
import './index.scss';

const audio: HTMLAudioElement = document.querySelector('#audio');
const volume: HTMLInputElement = document.querySelector('#volume');
volume.addEventListener('input', () => {
    if (audio) {
        audio.volume = +volume.value;
    }
});

const bg: HTMLDivElement = document.querySelector('#bg');
const buttons: HTMLDivElement = document.querySelector('#buttons');
let currentAudio: string = undefined;

function play(e: MouseEvent, item: IData) {
    const clearPlaying = () => {
        document.querySelectorAll('.playing').forEach((item) => item.classList.remove('playing'));
    };

    if (item.audio === currentAudio) {
        if (audio.paused) {
            audio.play();
            (e.currentTarget as HTMLElement).querySelector('span').classList.add('playing');
        } else {
            audio.pause();
            (e.currentTarget as HTMLElement).querySelector('span').classList.remove('playing');
        }
    } else {
        currentAudio = item.audio;
        audio.src = item.audio;
        audio.volume = +volume.value;
        audio.play();
        bg.style.background = `url('${item.image}') bottom center no-repeat`;
        clearPlaying();
        (e.currentTarget as HTMLElement).querySelector('span').classList.add('playing');
    }
}

function getButtonIcon(img: string): HTMLSpanElement {
    const icon: HTMLSpanElement = document.createElement('span');
    icon.style.backgroundImage = `url('${img}')`;
    icon.style.backgroundRepeat = `no-repeat`;
    icon.style.backgroundSize = `contain`;
    return icon;
}

function getButton(item: IData): HTMLDivElement {
    const button: HTMLDivElement = document.createElement('div');
    button.className = 'button';
    button.style.background = `url('${item.image}') bottom center no-repeat`;
    button.appendChild(getButtonIcon(item.icon));
    button.addEventListener('click', (e: MouseEvent) => play(e, item));
    return button;
}

data.forEach((item) => buttons.appendChild(getButton(item)));
