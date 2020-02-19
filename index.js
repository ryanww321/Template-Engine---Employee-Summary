const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const jest = require("jest");
const generateHTML = require("./generateHTML")
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "nameManager",
            message: "Please enter the name of the manager: "
        },
        {
            type: "input",
            name: "idManager",
            message: "Pleae enter the ID of the manager: "
        },
        {
            type: "input",
            name: "titleManager",
            message: "Please enter the title of the manager: "
        },
        {
            type: "input",
            name: "officeNumberManager",
            message: "Please enter the office number of manager: "
        },
        {
            type: "input",
            name: "nameEngineer1",
            message: "Please enter the name of the first engineer: "
        },
        {
            type: "input",
            name: "idEngineer1",
            message: "Please enter the ID of the first engineer: "
        },
        {
            type: "input",
            name: "titleEngineer1",
            message: "Please enter the title of the first engineer: "
        },
        {
            type: "input",
            name: "githubEngineer1",
            message: "Please enter the GitHub username of the first engineer: "
        },
        {
            type: "input",
            name: "nameEngineer2",
            message: "Please enter the name of the second engineer: "
        },
        {
            type: "input",
            name: "idEngineer2",
            message: "Please enter the ID of the second engineer: "
        },
        {
            type: "input",
            name: "titleEngineer2",
            message: "Please enter the title of the second engineer: "
        },
        {
            type: "input",
            name: "githubEngineer2",
            message: "Please enter the GitHub username of the second engineer: "
        },

        {
            type: "input",
            name: "nameEngineer3",
            message: "Please enter the name of the third engineer: "
        },
        {
            type: "input",
            name: "idEngineer3",
            message: "Please enter the ID of the third engineer: "
        },
        {
            type: "input",
            name: "titleEngineer3",
            message: "Please enter the title of the third engineer: "
        },
        {
            type: "input",
            name: "githubEngineer3",
            message: "Please enter the GitHub username of the third engineer: "
        },
        {
            type: "input",
            name: "nameIntern",
            message: "Please enter the name of the intern: "
        },
        {
            type: "input",
            name: "idIntern",
            message: "Please enter the ID of intern: "
        },
        {
            type: "input",
            name: "titleIntern",
            message: "Please enter the title of intern:"
        },
        {
            type: "input",
            name: "schoolIntern",
            message: "Please enter the school attended by the intern: "
        },

    ]);
}


async function init() {
    try {
        const answers = await promptUser();

        const html = generateHTML(answers);
        await writeFileAsync("index.html", html);

    } catch (err) {
        console.log(err);
    }
}

init();

// startProgram();
// async function startProgram() {
//     let { email, id } = await promptForInfo()
//     console.log(data);
// }
// async function promptForInfo() {
//     return inquirer.prompt([
//         {
//             message: "What is your email?",
//             name: "name",
//             type: "input"
//         },
//         {
//             message: "What is your ID?",
//             name: "id",
//             type: "input"
//         },
//     ])
// }
// module.exports = promptforInfo;