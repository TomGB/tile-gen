const tinygradient = require('tinygradient');

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const generate = (options = {}) => {
  const colourMap = [];

  if (!options.colours) {
    options.colours = {
      colour1: getRandomColor(),
      colour2: getRandomColor(),
      colour3: getRandomColor(),
      colour4: getRandomColor(),
    }
  }

  const gradient1 = tinygradient([
    options.colours.colour1,
    options.colours.colour2,
  ]).hsv(20);

  const gradient2 = tinygradient([
    options.colours.colour3,
    options.colours.colour4,
  ]).hsv(30);

  for (let x = 0; x < 20; x++) {
    const colourRow = [];

    for (let y = 0; y < 30; y++) {
      const { _r: r1, _g: g1, _b: b1 } = gradient1[x];
      const { _r: r2, _g: g2, _b: b2 } = gradient2[y];
      colourRow.push({ r: (r1 + r2) / 2, g: (g1 + g2) / 2, b: (b1 + b2) / 2 });
    }

    colourMap.push(colourRow);
  }

  return colourMap;
}

module.exports = generate;