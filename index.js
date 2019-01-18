const generateCanvas = require('./src/utils/generateCanvas');
const drawOnCLI = require('./src/utils/drawOnCLI');
const savetoFile = require('./src/utils/saveToFile');

const gradEveryLine = require('./src/patterns/gradEveryLine');
const twoGradients = require('./src/patterns/twoGradients');

const patternPrograms = {
    gradEveryLine,
    twoGradients,
};

const start = async () => {
    const pattern = process.argv[2];

    if (!pattern) {
        console.log('available patterns:')
        Object.keys(patternPrograms).forEach(name => console.log(name));
        console.log();
        console.log('e.g.')
        console.log('npm run gen -- gradEveryLine')
        console.log();
        return;
    }

    const selectedPattern = patternPrograms[pattern];

    if (typeof selectedPattern !== 'function') {
        console.log('no pattern with name', pattern);
        return;
    }

    const colourMap = selectedPattern();
    const canvas = await generateCanvas(colourMap);
    await drawOnCLI(canvas);
    await savetoFile(canvas);
};

start();
