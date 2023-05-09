import './heading.scss';

export default class Heading {
    render() {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');
        h1.innerHTML = 'Webpack is awesome and you know it bro';
        body.appendChild(h1);
    }
}