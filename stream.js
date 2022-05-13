//streaming & buffer. reading & writting.
//reading
const fs = require('fs');

const readStream = fs.createReadStream('./Docs/ninja3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./Docs/ninja4.txt');

// readStream.on('data', (chunk) => {
//     console.log('--------NEW CHUNK-------');
//     console.log(chunk);
//     writeStream.write('\nNEW-CHUNK\n');
//     writeStream.write(chunk);
// })

//piping
readStream.pipe(writeStream);