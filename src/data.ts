interface IData {
    icon: string,
    image: string,
    audio: string
};

const data: IData[] = [
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

export { IData, data }