const debounce = require('../utils/debounce');

const setupColourPickers = (options, newImage) => {
    const colourPickers = [...document.getElementsByClassName('colour-picker')];

    colourPickers.forEach(picker => {
        picker.addEventListener('change', () => {
            options.colours[picker.id] = picker.value;
    
            debounce(() => {
                console.log('gogo')
                newImage(options)
            });
        });
    });
}

module.exports = setupColourPickers;
