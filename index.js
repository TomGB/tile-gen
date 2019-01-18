const { createCanvas } = require('canvas')
const ansiEscapes = require('ansi-escapes');
const tinygradient = require('tinygradient');

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const rgb = (r, g, b) => {
  return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
}

const start = () => {
  const canvas = createCanvas(900, 1800)
  const ctx = canvas.getContext('2d')

  ctx.rotate(Math.PI / 4);
  
  ctx.fillStyle = 'black';
  
  ctx.fillRect(0, -800, 2000, 2200);

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

  for (let x = 0; x < 20; x++) {
    for (let y = 0; y < 30; y++) {
      const { r, g, b } = colourMap[x][y];

      ctx.fillStyle = rgb(r, g, b);
  
      ctx.fillRect(0 + x * 100, -800 + y * 100, 100 - 6, 100 - 6);
    }
  }
  
  var buf = canvas.toBuffer();
  
  console.log(ansiEscapes.image(buf));  
}

start();