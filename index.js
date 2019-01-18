const gradEveryLine = require('./src/gradEveryLine');
const twoGradients = require('./src/twoGradients.js');

const patternPrograms = {
    gradEveryLine,
    twoGradients,
};

const start = async () => {
    const pattern = process.argv[2];

    if (!pattern) {
        console.log('available patterns:')
        Object.keys(patternPrograms).forEach(name => console.log(name));
        return;
    }

    const selectedPattern = patternPrograms[pattern];

    if (typeof selectedPattern === 'function') {
        selectedPattern();
    } else {
        console.log('no pattern with name', pattern);
    }
};

start();
