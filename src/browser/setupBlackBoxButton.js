const setupBlackBoxButton = (options, newImage) => {
    const blackSpaceButton = document.getElementById('black-space');

    blackSpaceButton.addEventListener('click', () => {
        options.appBox = !options.appBox;
        newImage(options);
    })
};

module.exports = setupBlackBoxButton;
