const fs = require('fs')
const chalk = require('chalk')
const { Console } = require('console')

getNotes = () => {
    return 'Your notes ...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => 
        note.title === title
    )

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note created!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = title => {
    const notes = loadNotes()
    const selectedNote = notes.filter(note => 
        note.title !== title
    )
    if (selectedNote. length === notes.length) {
        console.log(chalk.red.inverse("No note found!"))
    } else {
        console.log(chalk.green.inverse("Note removed!"))
    }
    saveNotes(selectedNote)
}

const listNotes = () => {
    const notes= loadNotes()
    console.log(chalk.blue.inverse("Your notes"))
    notes.forEach(note => console.log(note.title)) 
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }  catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}