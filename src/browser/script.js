const queryString = require('query-string');
const generateCanvas = require('../utils/generateCanvas');
const twoGradients = require('../patterns/twoGradients');
const gradEveryLine = require('../patterns/gradEveryLine');
 
const runPattern = pattern => {
    if (pattern === 'gradEveryLine') {
        return gradEveryLine();
    }

    return twoGradients();
}

const newImage = async () => {
    const { pattern } = queryString.parse(location.search);

    const colourMap = runPattern(pattern);
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
