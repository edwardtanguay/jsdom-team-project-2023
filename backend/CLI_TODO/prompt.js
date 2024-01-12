import inquirer from "inquirer";
import dotenv from "dotenv";
import fs from "fs";
import * as tools from "../tools.js";
import assignmentTemplate from "./assignmentTemplate.js";

dotenv.config();
const assignmentData = JSON.parse(fs.readFileSync("src/assignments.json"));

const dataFiles = fs
  .readdirSync("src/data")
  .filter((file) => file.endsWith(".json"));

function promptUser() {
  return inquirer.prompt([
    {
      name: "user",
      message: "What is your name?",
      type: "input",
      validate: function (input) {
        if (input.trim() === "" || input.trim().includes(" ")) {
          return "Please enter your firstname.";
        }
        return true;
      },
      when: () => !process.env.VITE_USER,
    },
    {
      name: "createOrCopy",
      message: "What would you like to do?",
      type: "list",
      choices: ["Build a new assignment", "Copy an existing assignment"],
    },
    {
      name: "newAssignmentName",
      message: "Enter the name of the assignment:",
      type: "input",
      validate: function (input) {
        if (input.trim() === "") {
          return "Please enter a name for your assignment.";
        }
        return true;
      },
      when: (answers) => answers.createOrCopy === "Build a new assignment",
    },
    {
      name: "newAssignmentData",
      message: "Select the data to import in the assignment:",
      type: "checkbox",
      choices: [...dataFiles],
      when: (answers) => answers.createOrCopy === "Build a new assignment",
    },
    {
      name: "newAssignmentDescription",
      message: "Enter a description of the assignment:",
      type: "input",
      validate: function (input) {
        if (input.trim() === "") {
          return "Please enter a description for your assignment.";
        }
        return true;
      },
      when: (answers) => answers.createOrCopy === "Build a new assignment",
    },
    {
      name: "copyAssignmentName",
      message: "Select an existing assignment to copy:",
      type: "list",
      choices: () => {
        if (process.env.VITE_USER) {
          return assignmentData
            .filter(
              (assignment) => !assignment.users.includes(process.env.VITE_USER)
            )
            .map((assignment) => assignment.title);
        } else {
          return assignmentData.map((assignment) => assignment.title);
        }
      },
      when: (answers) => answers.createOrCopy === "Copy an existing assignment",
    },
  ]);
}

promptUser()
  .then((answers) => {
    answers.user = process.env.VITE_USER || answers.user;
    handleUserChoice(answers);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

function handleUserChoice(userData) {
  // create a new assignment
  if (userData.createOrCopy === "Build a new assignment") {
    handleCreateAssignment(userData);
    userData.copyAssignmentName = userData.newAssignmentName;
    handleCopyAssignment(userData);
  }

  // copy an existing assignment
  if (userData.createOrCopy === "Copy an existing assignment") {
    handleCopyAssignment(userData);
  }

  // create a .env with the user's name if it doesnt exist
  // if it does exist, append the user's name to the .env file
  if (!process.env.VITE_USER) {
    fs.appendFile(".env", `VITE_USER=${userData.user.toLowerCase()}`, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
}

const handleCreateAssignment = (userData) => {
  console.log(`Building a new assignment ${userData.newAssignmentName}...`);

  const componentName = tools.convertTextNotationToCamelcase(
    userData.newAssignmentName
  );

  const pageFileNameBase = tools.convertTextNotationToKebabcase(
    userData.newAssignmentName
  );
  const pageFileName = pageFileNameBase + ".ts";
  tools.createFile(
    `./src/pages/assignments/${pageFileName}`,
    assignmentTemplate(
      componentName,
      userData.newAssignmentName,
      pageFileName,
      userData.newAssignmentData
    )
  );

  const assignmentData = JSON.parse(fs.readFileSync("src/assignments.json"));
  assignmentData.push({ title: userData.newAssignmentName, users: [] });
  fs.writeFileSync(
    "src/assignments.json",
    JSON.stringify(assignmentData, null, 2)
  );
};

const handleCopyAssignment = (userData) => {
  console.log(`Copying assignment ${userData.copyAssignmentName}...`);
  if (!fs.existsSync(`src/pages/${userData.user.toLowerCase()}`)) {
    fs.mkdirSync(`src/pages/${userData.user.toLowerCase()}`);
  }
  const pageFileNameBase = tools.convertTextNotationToKebabcase(
    userData.copyAssignmentName
  );
  const pageFileName = pageFileNameBase + ".ts";

  fs.copyFileSync(
    `src/pages/assignments/${pageFileName}`,
    `src/pages/${userData.user}/${pageFileName}`
  );

  const assignmentData = JSON.parse(fs.readFileSync("src/assignments.json"));
  assignmentData
    .find((assignment) => assignment.title === userData.copyAssignmentName)
    .users.push(userData.user);

  fs.writeFileSync(
    "src/assignments.json",
    JSON.stringify(assignmentData, null, 2)
  );
};
