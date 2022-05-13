const fs = require('fs');

//read files
//fs.readFile('./Docs/ninja.txt', (err, data) => {
//    if (err) {
//        console.log(err);
//    }
//    console.log(data.toString());
//});
//console.log('hey man');

//write files
// fs.writeFile('./Docs/ninja.txt', 'NodeJs is fun', () => {
//     console.log('file written successfully!');
// });
// fs.writeFile('./Docs/ninja2.txt', 'NodeJs is sweet', () => {
//     console.log('Success');
// });

//directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created!');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted!');
//     });
// }

//delete files

if (fs.existsSync('./Docs/deleteme.txt')) {
    fs.unlink('./Docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}