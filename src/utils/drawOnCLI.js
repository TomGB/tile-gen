
const ansiEscapes = require('ansi-escapes');

const drawOnCLI = canvas => {
    var buf = canvas.toBuffer();
    console.log(ansiEscapes.image(buf));
}

module.exports = drawOnCLI;
