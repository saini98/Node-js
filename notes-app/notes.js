const fs = require('fs');
const chalk = require('chalk');
console.log('This is notes js file');

const getNotes = (notes) => {
  return notes;
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  const _duplicateNote = notes.find((note) => {
    return note.title === title
  })

  if (!_duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.bgGreen.bold('New note Added'))
    return saveNotes(notes);
  } else {
    console.log(chalk.bgRed.bold('This is already saved in DB'));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const removeTitle = (title) => {
  const notes = loadNotes();
  console.log(notes, 'nooooootes');
  const updatedNotes = notes.filter((note) => {
    return note.title !== title;
  });
  if (notes.length > updatedNotes.length) {
    console.log(chalk.bold.bgGreen('Title Removed'))
    saveNotes(updatedNotes);
  } else {
    console.log(chalk.bold.bgRed('Title not found'))
  }
};

const listNotes = () => {
    console.log(chalk.bgBlue.bold('Your Notes....'));

    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(note.title)
        
    });
}

const readNote = (searchedTitle) => {
    console.log(chalk.bgBlue.bold('Reading your note...'));

    const notes = loadNotes();
    const searchNote = notes.find(note => note.title === searchedTitle);
    if(searchNote) {
        console.log(chalk.bold.bgWhite.black(`TITLE: ${searchNote.title} `));
        console.log(chalk.bold.bgWhite.black(`BODY: ${searchNote.body} `));
    } else {
        console.log(chalk.bgRed.bold('!Note Not Found!'))
    }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeTitle: removeTitle,
  listNotes: listNotes,
  readNote: readNote
};
