const { createCanvas } = require('canvas')
const ansiEscapes = require('ansi-escapes');

const rgb = (r, g, b) => {
  return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
}

const draw = (colourMap) => {
  const canvas = createCanvas(900, 1800)
  const ctx = canvas.getContext('2d')

  ctx.rotate(Math.PI / 4);
  
  ctx.fillStyle = 'black';
  
  ctx.fillRect(0, -800, 2000, 2200);

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

module.exports = draw;