const fs = require('fs');

const saveToFile = async canvas => {
    var buf = canvas.toBuffer();

    const nextFileIndex = fs.readdirSync('./saved').length
    const fileName = `./saved/output${nextFileIndex}.png`;
    
    await fs.writeFileSync(fileName, buf);
    
    console.log('image saved as', `${fileName}`);
}

module.exports = saveToFile;
