function generateUrl(github, title) {
    // hypen seperated case convention
    const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${github}/${kebabCaseTitle}`;
  }
  
  // renderBadge function creates url for license chosen by user input
  function renderBadge(license, github, title) {
    if (license !== "None") {
      return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateUrl(github, title)})`
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
  
  // markdown function actually will generate readme
  function markdown(data) {
    return `
   Title: ${data.title}
  ${renderBadge(data.license, data.github, data.title)}
   Description:
  ${data.description}
   Table of Contents 
   [Installation]
   [Usage]
   [License]
   [Tests]

  Installation:
  To install necessary dependencies, run the following command:
  ${data.installation}

  Tests:
  To run tests, run the following command:
  ${data.test}
  `;
  }
  
  module.exports = markdown;