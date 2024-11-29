const fs = require('fs');
const pdfParse = require('pdf-parse');

const extractTextFromPDF = async (pdfPath) => {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const pdfData = await pdfParse(dataBuffer);
    return pdfData.text; // Extracted text content
  } catch (error) {
    console.error('Error extracting text from PDF:', error.message);
    throw new Error('Failed to extract text from PDF.');
  }
};

module.exports = extractTextFromPDF;

