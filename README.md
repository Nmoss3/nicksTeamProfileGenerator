# nicksTeamProfileGenerator

## Disclosure

Applicationd does not yet fully function. It does not generate an HTML page nor does the template hold style.

## Installation

npm install after cloning repository.

## Dependencies

Node.js
Inquirer
Jest
Bootstrap

## User Story

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Tests

![Untitled_ Apr 11, 2021 11_46 PM](https://user-images.githubusercontent.com/75024930/114353125-80ad5000-9b21-11eb-886e-417e33ec69fe.gif)

## Image of Planned HTML

![plannedHTML](https://user-images.githubusercontent.com/75024930/114352416-b271e700-9b20-11eb-8c49-7920885eb880.PNG)

## Created By

Nicholas Moss
