const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-site");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

let fullTeamArray = [];

function welcomePrompt() {
  inquirer
    .prompt([
      {
        message: "Welcome to the team Generator, What is your team's Name?",
        name: "teamName",
      },
    ])
    .then(function (data) {
      const teamName = data.teamName;
      fullTeamArray.push(teamName);
      addManager();
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        message: "What is the team managers name?",
        name: "name",
      },
      {
        message: "What is the team managers email address?",
        name: "email",
      },
      {
        type: "number",
        message: "What is the office phone number for your team manager?",
        name: "officeNumber",
      },
    ])

    .then(function (data) {
      const name = data.name;
      const id = 1;
      const email = data.email;
      const officeNumber = data.officeNumber;
      const teamManager = new Manager(name, id, email, officeNumber);
      fullTeamArray.push(teamManager);
      addTeamPeople();
    });
}

function addTeamPeople() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add more people to the team?",
        choices: [
          "Yes, add an Engineer",
          "Yes, add an Intern",
          "No, this is my whole team",
        ],
        name: "addEmpData",
      },
    ])

    .then(function (data) {
      switch (data.addEmpData) {
        case "Yes, add an Engineer":
          addEngineer();
          break;

        case "Yes, add an Intern":
          addIntern();
          break;
        case "No, this is my whole team":
          fullTeam();
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        message: "What is your Engineers name?",
        name: "name",
      },
      {
        message: "What is their email address?",
        name: "email",
      },
      {
        message: "What is their Github username?",
        name: "github",
      },
    ])

    .then(function (data) {
      const name = data.name;
      const id = fullTeamArray.length + 1;
      const email = data.email;
      const github = data.github;
      const teamPeople = new Engineer(name, id, email, github);
      fullTeamArray.push(teamPeople);
      addTeamPeople();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        message: "What is the name of the Intern?",
        name: "name",
      },
      {
        message: "What is the email for the intern?",
        name: "email",
      },
      {
        message: "What school is the Intern Studying at?",
        name: "school",
      },
    ])

    .then(function (data) {
      const name = data.name;
      const id = fullTeamArray.length + 1;
      const email = data.email;
      const school = data.school;
      const teamPeople = new Intern(name, id, email, school);
      fullTeamArray.push(teamPeople);
      addTeamPeople();
    });
}

function fullTeam() {
  console.log("This is your team!");
}

welcomePrompt();
