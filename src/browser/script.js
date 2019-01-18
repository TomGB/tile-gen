const generateCanvas = require('../utils/generateCanvas');

const twoGradients = require('../patterns/twoGradients');

const newImage = async () => {
    const colourMap = twoGradients();
    canvas = await generateCanvas(colourMap);

    const imageArea = document.getElementById("image-area");

    const image = new Image();
    image.src = canvas.toDataURL("image/png");

    imageArea.innerHTML = '';
	imageArea.appendChild(image);
};

document.getElementById('new-canvas').addEventListener('click', () => {
    newImage();
})

newImage();
