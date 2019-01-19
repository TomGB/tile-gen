const setupNewRandomButton = newImage => {
    const newButton = document.getElementById('new-canvas')

    newButton.addEventListener('click', () => {
        newImage();
    });
};

module.exports = setupNewRandomButton;
