// Checks for user choice on license and assigns the badge to be displayed (if any) based on that choice
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// checks if a license was selected, return selected license or return empty string if none was selected
function renderLicenseSection(license) {
 return (license ? `${license}` : '')
}

// Function to create the markdown for the readme
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Description
  ${answers.description}
  ## Installation
  ${answers.installation}
  ## Credit
  ${answers.credit}
  ## License
  ${renderLicenseBadge(answers.license)} ${renderLicenseSection(answers.license)} ${renderLicenseLink(answers.license)}
  ## Features
  ${answers.features}`;
}

module.exports = generateMarkdown;
