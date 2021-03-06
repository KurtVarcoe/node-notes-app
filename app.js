const fs = require('fs')
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')
const { listNotes, readNote } = require('./notes')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.addNote(argv.title, argv.body)}
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.removeNote(argv.title)}
})

yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler() {listNotes()}
})

yargs.command({
    command: 'read',
    describe: 'Read the notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {readNote(argv.title)}
})

yargs.parse()