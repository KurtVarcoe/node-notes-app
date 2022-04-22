const getNotes = require('./notes')
const chalk = require('chalk')

console.log(getNotes())

const finalText = chalk.bold.inverse.green("Success!")

console.log(finalText)