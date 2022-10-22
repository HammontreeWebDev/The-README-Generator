// Checks for user choice on license and assigns the badge to be displayed (if any) based on that choice

// choices: |||'The zlib/libpng License']
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
  else if (license == 'GNU GPL v3') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
  }
  else if (license == 'GNU GPL v2') {
    return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  }
  else if (license == 'GNU AGPL v3') {
    return `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`;
  }
  else if (license == 'GNU LGPL v3') {
    return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
  }
  else if (license == 'GNU FDL v1.3') {
    return `![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)`;
  }
  else if (license == 'IBM Public License Version 1.0') {
    return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`;
  }
  else if (license == 'The MIT License') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else if (license == 'Mozilla Public License 2.0') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  }
  else if (license == 'Attribution License (BY)') {
    return `![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)`;
  }
  else if (license == 'Open Database License (ODbL)') {
    return `![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)`;
  }
  else if (license == 'Public Domain Dedication and License (PDDL)') {
    return `![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)`;
  }
  else if (license == 'The Perl License') {
    return `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)`;
  }
  else if (license == 'The Artistic License 2.0') {
    return `![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)`;
  }
  else if (license == 'The zlib/libpng License') {
    return `![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)`;
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
  else if (license == 'GNU GPL v3') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license == 'GNU GPL v2') {
    return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
  else if (license == 'GNU AGPL v3') {
    return `(https://www.gnu.org/licenses/agpl-3.0)`;
  }
  else if (license == 'GNU LGPL v3') {
    return `(https://www.gnu.org/licenses/lgpl-3.0)`;
  }
  else if (license == 'GNU FDL v1.3') {
    return `(https://www.gnu.org/licenses/fdl-1.3)`;
  }
  else if (license == 'IBM Public License Version 1.0') {
    return `(https://opensource.org/licenses/IPL-1.0)`;
  }
  else if (license == 'The MIT License') {
    return `(https://opensource.org/licenses/MIT)`;
  }
  else if (license == 'Mozilla Public License 2.0') {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  }
  else if (license == 'Attribution License (BY)') {
    return `(https://opendatacommons.org/licenses/by/)`;
  }
  else if (license == 'Open Database License (ODbL)') {
    return `(https://opendatacommons.org/licenses/odbl/)`;
  }
  else if (license == 'Public Domain Dedication and License (PDDL)') {
    return `(https://opendatacommons.org/licenses/pddl/)`;
  }
  else if (license == 'The Perl License') {
    return `(https://opensource.org/licenses/Artistic-2.0)`;
  }
  else if (license == 'The Artistic License 2.0') {
    return `(https://opensource.org/licenses/Artistic-2.0)`;
  }
  else if (license == 'The zlib/libpng License') {
    return `(https://opensource.org/licenses/Zlib)`;
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
