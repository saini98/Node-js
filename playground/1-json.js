const fs = require('fs');
// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book);
// console.log(bookJson, 'json');

// const parsedData = JSON.parse(bookJson);
// console.log(parsedData.title, 'title');

// fs.writeFileSync('1-json.json', bookJson);

const dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer, 'read');

const dataJSON = dataBuffer.toString()
// console.log(dataJson, 'dataJson');

const userData = JSON.parse(dataJSON);
console.log(userData, 'data');

userData.name = 'Mohit Saini'
userData.age = '20'

const updatedUserData = JSON.stringify(userData);
console.log(updatedUserData, 'updated')
fs.writeFileSync('1-json.json', updatedUserData);




