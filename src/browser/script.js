const generateCanvas = require('../utils/generateCanvas');

const twoGradients = require('../patterns/twoGradients');

const newImage = async () => {
    const colourMap = twoGradients();
    const canvas = await generateCanvas(colourMap);

    const canvasArea = document.getElementById("canvas-area");
    canvasArea.innerHTML = '';
    canvasArea.appendChild(canvas);
};

document.getElementById('new-canvas').addEventListener('click', () => {
    newImage();
})

newImage();
