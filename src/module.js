// export default class Bar() {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//         this.message = 'Webpack is working!';
//         console.log(`${message}`);
    
//     }

//     show() {
//         let message = `I am a polygone ${this.height} x ${this.width}`;
//         console.log(message);
//         if(window) {
//             document.write(message);
//         } else {
//             console.log(message);
//         }
//     }
// }

export default function bar() {
    let message = 'Webpack working!';
    console.log('Webpack working!');
    return message;
}