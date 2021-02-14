// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectname}


![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description

${data.description}

## Table of Contents

*[Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#tests)

## Installation

To install modules run
\`\`\`

 ${data.dependencies}

\`\`\`

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contribute}

## Tests

To run tests, run the following command:

\`\`\`

 ${data.test}

\`\`\`
## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}.
You can find more of my work at ${data.username}


`;
}

module.exports = generateMarkdown;
