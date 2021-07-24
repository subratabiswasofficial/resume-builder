module.exports = function ({ personalData, experienceData }) {
    let doc = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Template 1</title>
    </head>
    <style>
    :root {
        --main-bg-color: #d2d6d9;
        --text-color-caption: #732c02;
        --caption-bg-color: #fea443;
        --text-color-details: #732c02;
        --hline-color: #732c02;
        --wrapper-border-color: #d9b54a;
    }
    * {
        margin: 0;
    }
    body {
        height: 100vh;
        background-color: #d2d6d9;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px;
        font-size: 18px;
    }
    .main-wrapper {
        padding: 20px;
        border: 3px solid #d9b54a;
    }
    .caption {
        color: #732c02;
        background-color: #fea443;
        padding: 5px;
    }
    .details {
        padding-left: 20px;
        color:  #732c02;
    }
    .hline {
        height: 1px;
        background-color: #732c02;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    </style>
    <body>
        <div class="main-wrapper">
            <h3>Personal Details</h3>
            <table>
                <tr>
                    <td class="caption">Name</td>
                    <td class="details">${personalData.firstName} ${personalData.lastName}</td>
                </tr>
                <tr>
                    <td class="caption">email</td>
                    <td class="details">${personalData.email}</td>
                </tr>
${
    personalData.number.length >= 10
        ? `                <tr>
                    <td class="caption">Phone number</td>
                    <td class="details">${personalData.number}</td>
                </tr>`
        : ''
}
${
    personalData.address.length >= 10
        ? ` <tr>
                    <td class="caption">Address</td>
                    <td class="details">${personalData.address}</td>
                </tr>`
        : ''
}
${
    personalData.zipCode.length > 0
        ? ` <tr>
                    <td class="caption">Zip Code</td>
                    <td class="details">${personalData.zipCode}</td>
                </tr>`
        : ''
}
${
    personalData.city.length > 0
        ? ` <tr>
                    <td class="caption">City/Town</td>
                    <td class="details">${personalData.city}</td>
                </tr>`
        : ''
}
            </table>
            <hr class="hline" />
            <h3>Experiences</h3>
            <table>
            ${
                experienceData.competencics.length > 0
                    ? `
                <tr>
                    <td class="caption">Key competencies</td>
                    <td class="details">${experienceData.competencics}</td>
                </tr>`
                    : ''
            }
            ${
                experienceData.jobTitle.length > 0
                    ? `<tr>
                    <td class="caption">Job title</td>
                    <td class="details">${experienceData.jobTitle}</td>
                </tr>`
                    : ''
            }
                ${
                    experienceData.city.length > 0
                        ? `<tr>
                    <td class="caption">Job City/Town</td>
                    <td class="details">${experienceData.city}</td>
                </tr>`
                        : ''
                }
                ${
                    experienceData.employer.length > 0
                        ? `<tr>
                    <td class="caption">Employer</td>
                    <td class="details">${experienceData.employer}</td>
                </tr>`
                        : ''
                }
                ${
                    experienceData.startDate.length > 0
                        ? `<tr>
                    <td class="caption">Start Date</td>
                    <td class="details">${experienceData.startDate}</td>
                </tr>`
                        : ''
                }
                ${
                    experienceData.endDate.length > 0
                        ? `<tr>
                    <td class="caption">End Date</td>
                    <td class="details">${experienceData.endDate}</td>
                </tr>`
                        : ''
                }
                ${
                    experienceData.internshipDescription.length > 0
                        ? `<tr>
                    <td class="caption">Description</td>
                    <td class="details">${experienceData.internshipDescription}</td>
                </tr>`
                        : ''
                }
            </table>
            <hr class="hline" />
            <h3>Education and Qualifications</h3>
            <table>
            ${
                experienceData.degree.length > 0
                    ? `<tr>
                    <td class="caption">Degree</td>
                    <td class="details">${experienceData.degree}</td>
                </tr>`
                    : ''
            }
                ${
                    experienceData.school.length > 0
                        ? `<tr>
                    <td class="caption">School</td>
                    <td class="details">${experienceData.school}</td>
                </tr>`
                        : ''
                }
                ${
                    experienceData.eduCity.length > 0
                        ? `<tr>
                    <td class="caption">School City/Town</td>
                    <td class="details">${experienceData.eduCity}</td>
                </tr>`
                        : ''
                }

                ${
                    experienceData.eduStartDate.length > 0
                        ? `<tr>
                    <td class="caption">Start Date</td>
                    <td class="details">${experienceData.eduStartDate}</td>
                </tr>`
                        : ''
                }
                ${
                    experienceData.eduEndDate.length > 0
                        ? `<tr>
                    <td class="caption">End Date</td>
                    <td class="details">${experienceData.eduEndDate}</td>
                </tr>`
                        : ''
                }
                ${
                    experienceData.eduDescription.length > 0
                        ? `<tr>
                    <td class="caption">Description</td>
                    <td class="details">${experienceData.eduDescription}</td>
                </tr>`
                        : ''
                }
            </table>
        </div>
    </body>
</html>
`;
    return doc;
};
