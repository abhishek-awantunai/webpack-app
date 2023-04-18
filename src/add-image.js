import Splash from './assets/splash.jpg';
import AltText from './assets/alt-text.txt';

export default function addImage() {
    const image = document.createElement('img');
    image.src = Splash;
    image.alt = AltText;
    image.width = 1425;
    const body = document.querySelector('body');
    body.appendChild(image);
}