const generateCanvas = require('../utils/generateCanvas');
const getPatternFunction = require('../utils/getPatternFunction');
const setupColourPickers = require('./setupColourPickers');
const setupNewRandomButton = require('./setupNewRandomButton');
const setupBlackBoxButton = require('./setupBlackBoxButton');
const addImageToPage = require('./addImageToPage');

const options = {
    patternFunction: getPatternFunction(),
};

const newImage = async () => {
    const colourMap = options.patternFunction(options);
    const canvas = await generateCanvas(colourMap, options);
    addImageToPage(canvas);
};

setupNewRandomButton(options, newImage);
setupColourPickers(options, newImage);
setupBlackBoxButton(options, newImage);

newImage();
