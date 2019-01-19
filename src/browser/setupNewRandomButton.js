const setupNewRandomButton = (options, newImage) => {
    const newButton = document.getElementById('new-canvas')

    newButton.addEventListener('click', () => {
        options.colours = false;
        newImage();
    });
};

module.exports = setupNewRandomButton;
