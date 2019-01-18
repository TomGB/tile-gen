const tinygradient = require('tinygradient');
const draw = require('./utils/draw')

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const generate = () => {
    const colourMap = [];
  
    for (let x = 0; x < 20; x++) {
      const gradient = tinygradient([
        getRandomColor(),
        getRandomColor(),
      ]).hsv(30);
  
      const colourRow = [];
  
      for (let y = 0; y < 30; y++) {
        const { _r, _g, _b } = gradient[y];
        colourRow.push({ r: _r, g: _g, b: _b });
      }
  
      colourMap.push(colourRow);
    }

    draw(colourMap);
}

module.exports = generate;