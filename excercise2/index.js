const fileSystem = require('./utils/file');
const jsonToExcel = require('./utils/excel');

const filePath = 'writefile.txt';
const copiedFilePath = 'newFile.txt';
const encoding = 'utf-8';
const jsonPath = 'data.json';
const excelPath = 'data.xlsx';

fileSystem(filePath, encoding, copiedFilePath);
jsonToExcel(jsonPath, excelPath);