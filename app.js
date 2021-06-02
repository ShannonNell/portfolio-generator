const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);

const [Name, github] = profileDataArgs;
console.log(Name, github);

const pageHTML = generatePage(Name, github);

//fs.writeFile(name of file being created, data that will be written on file, callback function for error handling)
fs.writeFile('index.html', generatePage(Name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});