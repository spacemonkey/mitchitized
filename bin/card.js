#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Mitch Pirtle /'),
  handle: chalk.keyword('goldenrod')('mitchitized'),
  work: chalk.white('CTO, Founder, Contributor, Entrepreneur'),
  github: chalk.keyword('goldenrod')('https://github.com/spacemonkey'),
  linkedin: chalk.keyword('goldenrod')('https://linkedin.com/in/mitchpirtle'),
  web: chalk.keyword('goldenrod')('https://about.me/mitchitized'),
  npx: chalk.white('npx mitchitized'),
  labelWork: chalk.white.bold('      Work:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.gray(boxen(output, options)))
