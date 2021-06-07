//import fs into file
const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if error, reject promise, send error to Promise's `catch()` method
            if (err) {
                reject(err);
                //return out of function to make sure promise doesn't accidentally resolve
                return;
            }
            //if everything went well, resolve promise and send to then() method
            resolve ({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
              reject(err);
              return;
            }
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!'
            });
        });
    });
};

//export functions
// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// };
//OR using shorthand property names (if property key namd is same name as value, you can do it this way)
module.exports = {writeFile, copyFile};