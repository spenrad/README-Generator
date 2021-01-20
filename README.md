README Generator
====
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


----


# Table of Contents
[Description](#Description) <br>
[License](#License) <br>
[Code](#Code) <br> 
[Installation](#Installation) <br>
[Usage](#Usage) <br>
[Contributing](#Contributing) <br>
[Project Link](#Project Link) <br>
[Author](#Author) <br>


----


# Description
Creating a README is lots of fun, especially when it comes to formatting it. I've created an app that can make that process much simpler for any user. 

----


# License
This application is covered under the MIT license.


----

# Code
I've created a simple app, that uses Inqurirer.js as a command line interface (CLI) to populate a template of a markdown file.
The general form of the README was created by me and then the unique data is manipulated via the CLI responses.

```
`${data.title}
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
`
```

This is the basic template that can be easily edited to fit any users needs.

The questions that I provided can also be easily changed to fit other use cases.

```
const questions = [
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?'
      },
      {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
      },
      {
        type: 'input',
        name: 'description',
        message: 'Breifly describe your project...'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license does your project have?',
        choices: ['MIT', 'ISC', 'IBM Public License Version 1.0']
      },
      {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What technologies should the user be familiar with if using this repo?'
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'What technologies should the user be familiar with to contribute to the repo?'
      }
];
```
One can see how the questions relate to the fields entered in the to the template literal.

If another user wished to use this app they would only need to clone down this repo and install Inquirer.


# Installation
In order to use the README generator one only need install Inquirer.js. Simply run npm install in your integrated terminal. 


----


# Usage 
Having an understanding of JavaScript and node.js will greatly aid any user attmpting to interact with this repository.


----


# Contributing 
Javascript and node.js are essential technologies needed to be able to contribute or make changes to the app within the repository.


----


# Project Link
[Project Repository](https://github.com/spenrad/README-Generator) <br>
[Video Demonstration](https://drive.google.com/file/d/1YuSBqLtUJd2-pMOXZqf_4JNn2fy3G8O0/view)

----

# Author
Spencer Christy<br>
[GitHub](https://github.com/spenrad)<br>
[LinkedIn](https://www.linkedin.com/in/spencer-christy-543b84b3/)<br>

----
