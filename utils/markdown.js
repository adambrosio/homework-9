function generateProjectUrl(github, title) {
    const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${github}/${kebabCaseTitle}`;
  }
  
  function renderBadge(license, github, title) {
    if (license !== "None") {
      return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
    }
    return ''
  }
  
  function renderSection(license) {
    if (license !== "None") {
      return (
        `License
  This project is licensed under the ${license} license.`
      )
    }
    return ''
  }
  
  function markdown(data) {
    return `
  ${data.title}
  ${renderBadge(data.license, data.github, data.title)}
   Description
  ${data.description}
   Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`
  Usage
  ${data.usage}
  ${renderSection(data.license)}
    
  Contributing
  ${data.contributing}
  Tests
  To run tests, run the following command:
  \`\`\`
  ${data.test}
  \`\`\`
  `;
  }
  
  module.exports = markdown;