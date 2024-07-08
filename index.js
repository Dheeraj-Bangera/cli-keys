#!/usr/bin/env node

const fs = require('fs');
const yargs = require('yargs');


const argv = yargs(process.argv.slice(2))
  .command('set <key> <value>', 'Set a key-value pair', {}, (argv) => {
    let data = {};
    const key = argv.key;
    const value = argv.value;

    try {
      const jsonString = fs.readFileSync('data.json', 'utf8');
      data = JSON.parse(jsonString);
    } catch (err) {
 
    }
    data[key] = value;

   
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    console.log(`Key '${key}' set with value '${value}'`);
  })
  .command('get <key>', 'Get the value for a key', {}, (argv) => {
    const key = argv.key;

    try {
   
      const jsonString = fs.readFileSync('data.json', 'utf8');
      const data = JSON.parse(jsonString);

   
      const value = data[key];
      if (value !== undefined) {
        console.log(`Value for key '${key}': ${value}`);
      } else {
        console.log(`Key '${key}' not found`);
      }
    } catch (err) {
      console.error('Error reading file:', err.message);
    }
  })
  .demandCommand()
  .help()
  .argv;
