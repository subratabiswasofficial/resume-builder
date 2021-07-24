const pdf = require('html-pdf');
const path = require('path');
const fs = require('fs');

module.exports.createResume = (req, res) => {
    const templateId = req.body.templateId;
    const pdfTemplate = require(`../templates/temp${templateId}`);
    const options = {
        height: '42cm',
        width: '29.7cm',
        timeout: '6000'
    };
    pdf.create(pdfTemplate(req.body), options).toFile('Resume.pdf', (err) => {
        if (err) {
            console.log(err);
            res.send(Promise.reject());
        } else res.send(Promise.resolve());
    });
};

module.exports.fetchPdf = (req, res) => {
    try {
        const fileUrl = path.join(__dirname, '..', '..', 'Resume.pdf');
        var file = fs.createReadStream(fileUrl);
        file.pipe(res);
    } catch (err) {
        console.log(err);
        return res.status(500).send('server error');
    }
};
