module.exports = (values) => {
    const {
        // Profile-Information
        firstname,
        lastname,
        email,
        phone,
        website,
        github,
        linkedin,
        twitter,
        facebook,
        instagram,

        // Education Information
        college,
        fromyear1,
        toyear1,
        qualification1,
        description1,
        school,
        fromyear2,
        toyear2,
        qualification2,
        description2,

        // Project Information...
        title1,
        link1,
        projectDescription1,
        title2,
        link2,
        projectDescription2,
        title3,
        link3,
        projectDescription3,

        // Experience Information
        institute1,
        position1,
        duration1,
        experienceDescription1,
        institute2,
        position2,
        duration2,
        experienceDescription2,

        // Extra Information
        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        skill6,
        interest1,
        interest2,
        interest3,
        interest4,
        interest5,
        interest6
    } = values;

    let htmlTemplate = `<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Hello World</title>
		</head>
		<body>
			<h2>Hello World 3</h2>
		</body>
	</html>
	`;

    return htmlTemplate;
};
