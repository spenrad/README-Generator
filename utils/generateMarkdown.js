// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  var img = "";
  var name = "License: " + data.license; 
  var badge = `[![${name}](${img})]`;

    if (data.license === "MIT") {
      img = "https://img.shields.io/badge/License-MIT-yellow.svg";
    }
    else if (data.license === "IBM Public License Version 1.0") {
      img = "https://img.shields.io/badge/License-IPL%201.0-blue.svg";
    }
    else if (data.license === "ISC") {
      img = "https://img.shields.io/badge/License-IPL%201.0-blue.svg"
    }
    else {img = "";
  };
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  var link = "";

  if (data.license === "MIT") {
    link = "(https://opensource.org/licenses/MIT)";
  }
  else if (data.license === "IBM Public License Version 1.0") {
    link = "(https://opensource.org/licenses/IPL-1.0)";
  }
  else if (data.license === "ISC") {
    link = "(https://opensource.org/licenses/ISC)"
  }
  else {link = "";
};
return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    renderLicenseBadge(license);
    renderLicenseLink(license);
    return badge + link;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

