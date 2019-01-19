const queryString = require('query-string');
const generateCanvas = require('../utils/generateCanvas');
const twoGradients = require('../patterns/twoGradients');
const gradEveryLine = require('../patterns/gradEveryLine');
 
const runPattern = (pattern, options) => {
    if (pattern === 'gradEveryLine') {
        return gradEveryLine();
    }

    return twoGradients(options);
}

const newImage = async options => {
    const { pattern } = queryString.parse(location.search);

    const colourMap = runPattern(pattern, options);
    canvas = await generateCanvas(colourMap);

    const imageArea = document.getElementById("image-area");

    const image = new Image();
    image.src = canvas.toDataURL("image/png");

    imageArea.innerHTML = '';
	imageArea.appendChild(image);
};

const newButton = document.getElementById('new-canvas')

newButton.addEventListener('click', () => {
    newImage();
});

let timeout;

const debounce = callback => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, 200);
}

const colourPickers = [...document.getElementsByClassName('colour-picker')];

const colours = {
    colour1: '#ffffff',
    colour2: '#ffffff',
    colour3: '#ffffff',
    colour4: '#ffffff',
}

colourPickers.forEach(picker => {
    picker.addEventListener('change', () => {
        colours[picker.id] = picker.value;

        debounce(() => {
            console.log('gogo')
            newImage(colours)
        });
    });
});

newImage();
