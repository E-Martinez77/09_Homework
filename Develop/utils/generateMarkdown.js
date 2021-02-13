// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Project Title

<!-- License -->

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

Description

## Description

${data.description}


## Table of Contents

*[Installation] (#installation)

*[Usage](#usage)

*[License](#license)

*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#tests)

## Installation

## License

This project is licensed under the ${data.license}

## Contributing

${data.contribute}

## Tests

To run tests, run the following command:

````
 ${data.license}
````
## Questions

If you have any questions about the repo, open an issue or contact me directly at ${questions.email}.
You can find more of my work at ${data.username}


`;
}

module.exports = generateMarkdown;
