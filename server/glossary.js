//var HashMap = require('hashmap');
const fs = require('fs');

const FILENAME = '../dictionary.json';

let hashmap = {};
try {
  hashmap = JSON.parse(fs.readFileSync(FILENAME).toString());
} catch (e) {
  console.log('The glossary doesnt exists yet.');
}

module.exports = {
  set(key, val) {
    hashmap[key] = val;
  },
  get(key) {
    return hashmap[key];
  },
  save() {
    fs.writeFileSync(FILENAME, JSON.stringify(hashmap, null, 2));
  }
};
