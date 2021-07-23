const pdf = require('html-pdf');
const { v4: uuidv4 } = require('uuid');
const { copyFile, unlink } = require('fs/promises');

const pdfTemplate = require('../templates/index');

const options = {
    height: '42cm',
    width: '29.7cm',
    timeout: '6000'
};

module.exports.createResume = async (req, res) => {
    const fileName = uuidv4();
    pdf.create(pdfTemplate(req.body), options).toFile(`${__dirname}/Dumps/${fileName}.pdf`, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send('server error');
        } else {
            return res.status(200).json({
                fileName
            });
        }
    });
};

module.exports.fetchPdf = async (req, res) => {
    try {
        const pdfId = req.params.id;
        await copyFile(`${__dirname}/Dumps/${pdfId}.pdf`, `${__dirname}/Dumps/Resume.pdf`);
        await unlink(`${__dirname}/Dumps/${pdfId}.pdf`);
        const file = `${__dirname}/Dumps/Resume.pdf`;
        return res.download(file);
    } catch (err) {
        console.log(err);
        return res.status(500).send('server error');
    }
};
