const inquirer = require('inquirer');

inquirer
  //recieve array of object in it's argument; known as the question object
  .prompt([
    {
      type: 'input',
      name: 'name', 
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(Name, github);

// //fs.writeFile(name of file being created, data that will be written on file, callback function for error handling)
// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

