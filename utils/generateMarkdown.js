// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  var img = "";
  var name = "License: " + license;

    if (license === "MIT") {
      img = "https://img.shields.io/badge/License-MIT-yellow.svg";
    }
    else if (license === "IBM Public License Version 1.0") {
      img = "https://img.shields.io/badge/License-IPL%201.0-blue.svg";
    }
    else if (license === "ISC") {
      img = "https://img.shields.io/badge/License-IPL%201.0-blue.svg"
    }
    else {img = "";
  };
  return `[![${name}](${img})]`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  var link = "";

  if (license == "MIT") {
    link = "(https://opensource.org/licenses/MIT)";
  }
  else if (license === "IBM Public License Version 1.0") {
    link = "(https://opensource.org/licenses/IPL-1.0)";
  }
  else if (license === "ISC") {
    link = "(https://opensource.org/licenses/ISC)"
  }
  else {link = "";
};
return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return renderLicenseBadge(license) + renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${data.title}
====
${renderLicenseSection(data.license)}


----


# Table of Contents
[Description](#Description) <br>
[Installation](#Installation) <br>
[Usage](#Usage) <br>
[Contributing](#Contributing) <br>
[Test](#Test) <br>
[Questions?](#Questions?) <br>


----


# Description
${data.description}


----


# License
This application is covered under the ${data.license} license.


----


# Installation
In order to use the README generator one only need install Inquirer.js. Simply run ${data.dependencies} in your integrated terminal. 


----


# Usage 
${data.usage}


----


# Contributing 
${data.contribute}


----


# Test 
${data.test}


----


# Questions?
GitHub Username: ${data.username} <br>
E-mail: ${data.email}

----
`;
}

module.exports = generateMarkdown;

