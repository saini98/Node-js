const fs = require('fs');
const add = require('./utils');
const notes = require('./notes');
const validator = require('validator');
const yargs = require('yargs');
const { type } = require('os');
const { title } = require('process');
// const chalk = require('chalk');

// console.log(fs, 'fs')

fs.writeFileSync('textFile.txt', 'This is my new txt type file.');

fs.appendFileSync('textFile.txt', 'This is a appended file usign nodejs');

const sum = add(10, -4);

console.log('The is sum: ', sum);

const myNote = notes.getNotes('HI.. this is Node js course for beginners');

console.log('Output of getNotes function: ', myNote);

console.log('is this Email valid: ', validator.isEmail('sahil.saini@tothenew.com'))

console.log('is this URL valid: ', validator.isURL('sahil.saini@tothenew.com'))

// const successMessage = chalk.green.bold.bgGreen.underline('SUCCESS');
// console.log('message: ', successMessage);
// console.log('message: ', chalk.red('Failed'));

console.log('Input: ', process.argv[2]);

const command = process.argv[2];

if(command === 'Add') {
    console.log('Adding Note!');
} else if (command === 'remove') {
    console.log('Remove Note!');
}


// create add command

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Body of a Note!',
            demandOption: true,
            type: 'string'
        }
    },
   handler(argv) {
        notes.addNote(argv.title, argv.body)
        console.log(argv, 'argv')
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body)
    }
})

// create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.removeTitle(argv.title);
        console.log('Removing the Note!');
    }
})

// create read command

// yargs.command({
//     command: 'read',
//     describe: 'Reading a  note',
//     handler: function() {
//         console.log('Reading the Note!')
//     }
// })

// create list command

yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler() {
        notes.listNotes();
    }
});

// create read command

yargs.command({
    command: 'read',
    describe: 'reading your notes',
    builder: {
        title: {
            describe: 'Reading Note',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        console.log(argv, 'argument')
        notes.readNote(argv?.title);
    }
})

yargs.parse();

// console.log(yargs.argv)
