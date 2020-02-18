const inquirer = require("inquirer");
startProgram();
async function startProgram() {
    let { email, id } = await promptForInfo()
    console.log(data);
}
async function promptForInfo() {
    return inquirer.prompt([
        {
            message: "What is your email?",
            name: "name",
            type: "input"
        },
        {
            message: "What is your ID?",
            name: "id",
            type: "input"
        },
    ])
}
module.exports = promptforInfo;