const ExcelJS = require('exceljs');
const fs = require('fs').promises;
const jsonToExcel = async (jsonFile, excelFile) => {
    try {
        const excelBook = new ExcelJS.Workbook();
        const excelSheet = excelBook.addWorksheet('Data');
        const data = JSON.parse(await fs.readFile(jsonFile, "utf-8"));
        const headers = Object.keys(data[0]);
        excelSheet.addRow(headers);
        data.forEach((item) => {
            const values = Object.values(item);
            excelSheet.addRow(values);
        });
        await excelBook.xlsx.writeFile(excelFile);
        console.log(' successfully added to Excel file:', excelFile);
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = jsonToExcel;