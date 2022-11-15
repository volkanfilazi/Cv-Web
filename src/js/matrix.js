const matrixRedContainer = document.querySelector('.matrix-red-container')
const matrixGreenContainer = document.querySelector('.matrix-green-container')
const matrixOrangeContainer = document.querySelector('.matrix-orange-container')
const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンアァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}
let color = 'orange'
const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = color;
    context.font = fontSize + 'px monospace';
    
    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

document.addEventListener('DOMContentLoaded', (event) => {
    setInterval(draw, 30)
})

const matrixRed = () => {
    color = 'red'  
    matrixGreenContainer.classList.remove('border-2')
    matrixOrangeContainer.classList.remove('border-2')
    matrixRedContainer.classList.add('border-2')
    
}

const matrixGreen = () => {
    color = 'green'  
    matrixGreenContainer.classList.add('border-2')
    matrixRedContainer.classList.remove('border-2')
    matrixOrangeContainer.classList.remove('border-2')
    
}

const matrixOrange = () => {
    color = 'orange'
    matrixOrangeContainer.classList.add('border-2')
    matrixGreenContainer.classList.remove('border-2')
    matrixRedContainer.classList.remove('border-2')
}



