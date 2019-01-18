const gradEveryLine = require('./src/gradEveryLine');
const twoGradients = require('./src/twoGradients.js');

const patternPrograms = {
    gradEveryLine,
    twoGradients,
};

const start = () => {
    const pattern = process.argv[2];

    if (!pattern) return gradEveryLine();

    const selectedPattern = patternPrograms[pattern];

    if (typeof selectedPattern === 'function') {
        selectedPattern();
    } else {
        console.log('no pattern with name', pattern);
    }
};

start();
