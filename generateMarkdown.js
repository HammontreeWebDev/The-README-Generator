// Checks for user choice on license and assigns the badge to be displayed (if any) based on that choice

// choices: |||'GNU GPL v3','GNU GPL v2','GNU AGPL v3','GNU LGPL v3','GNU FDL v1.3','IBM Public License Version 1.0','The MIT License','Mozilla Public License 2.0','Attribution License (BY)','Open Database License (ODbL)','Public Domain Dedication and License (PDDL)','The Perl License','The Artistic License 2.0','The zlib/libpng License']
function renderLicenseBadge(license) {
  if (license == 'Apache 2.0 License') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  else if (license == 'BSD 3-Clause License') {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  }
  else if (license == 'BSD 2-Clause License') {
    return `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
  }
  else if (license == 'Attribution 4.0 International') {
    return `![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)`;
  }
  else if (license == 'Attribution-ShareAlike 4.0 International') {
    return `![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)`;
  }
  else if (license == 'Attribution-NonCommercial 4.0 International') {
    return `![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)`;
  }
  else if (license == 'Attribution-NoDerivatives 4.0 International') {
    return `![License: CC BY-ND 4.0](https://licensebuttons.net/l/by-nd/4.0/80x15.png)`;
  }
  else if (license == 'Attribution-NonCommercial-ShareAlike 4.0 International') {
    return `![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)`;
  }
  else if (license == 'Attribution-NonCommercial-NoDerivatives 4.0 International') {
    return `![License: CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png)`;
  }
  else if (license == 'Eclipse Public License 1.0') {
    return `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;
  }
  else {
    console.log('Error');
    return '';
  }
}

function renderLicenseLink(license) { 
  if (license == 'Apache 2.0 License') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license == 'BSD 3-Clause License') {
    return `(https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else if (license == 'BSD 2-Clause License') {
    return `(https://opensource.org/licenses/BSD-2-Clause)`;
  }
  else if (license == 'Attribution 4.0 International') {
    return `(https://creativecommons.org/licenses/by/4.0/)`;
  }
  else if (license == 'Attribution-ShareAlike 4.0 International') {
    return `(https://creativecommons.org/licenses/by-sa/4.0/)`;
  }
  else if (license == 'Attribution-NonCommercial 4.0 International') {
    return `(https://creativecommons.org/licenses/by-nc/4.0/)`;
  }
  else if (license == 'Attribution-NoDerivatives 4.0 International') {
    return `(https://creativecommons.org/licenses/by-nd/4.0/)`;
  }
  else if (license == 'Attribution-NonCommercial-ShareAlike 4.0 International') {
    return `(https://creativecommons.org/licenses/by-nc-sa/4.0/)`;
  }
  else if (license == 'Attribution-NonCommercial-NoDerivatives 4.0 International') {
    return `(https://creativecommons.org/licenses/by-nc-nd/4.0/)`;
  }
  else if (license == 'Eclipse Public License 1.0') {
    return `(https://opensource.org/licenses/EPL-1.0)`;
  }
  else {
    console.log('Error');
    return '';
  }
}

// checks if a license was selected, return selected license or return empty string if none was selected
function renderLicenseSection(license) {
  return (license ? `${license}` : '')
}

// Function to create the markdown for the readme
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Description
  ${renderLicenseBadge(answers.license)}\n
  ${answers.description}
  ## Installation
  ${answers.installation}
  ## Credit
  ${answers.credit}
  ## License
  ${renderLicenseSection(answers.license)} ${renderLicenseLink(answers.license)}
  ## Features
  ${answers.features}`;
}

module.exports = generateMarkdown;
