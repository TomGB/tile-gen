const { createCanvas } = require('canvas')

const tileSize = 106;

const rgb = (r, g, b) => {
  return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
}

const generateCanvas = async (colourMap, options = {}) => {
  const canvas = createCanvas(900, 1800)
  const ctx = canvas.getContext('2d')

  ctx.rotate(Math.PI / 4);
  
  ctx.fillStyle = 'black';
  
  ctx.fillRect(0, -800, 2000, 2200);

  for (let x = 0; x < 20; x++) {
    for (let y = 0; y < 30; y++) {
      const { r, g, b } = colourMap[x][y];

      ctx.fillStyle = rgb(r, g, b);
  
      ctx.fillRect(-49 + x * tileSize, -792 + y * tileSize, tileSize - 6, tileSize - 6);
    }
  }

  if (options.appBox) {
    ctx.rotate(-(Math.PI / 4));

    ctx.fillStyle = 'black';
  
    ctx.fillRect(450,1125,1000,1000);
  }
 
  return canvas;
}

module.exports = generateCanvas;
