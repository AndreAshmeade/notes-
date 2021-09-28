const path = require('path');

// Base file name 
console.log(__filename); //filename with directory
console.log(path.basename(__filename));// filename 

//Directory name 
console.log(path.dirname(__dirname));

//file extension
console.log(path.extname(__filename));

// Create path object 
console.log(path.parse(__filename));
console.log(path.parse(__filename).name);

// Concatenate paths 
console.log(path.join(__dirname, 'test', 'hello.html'));


