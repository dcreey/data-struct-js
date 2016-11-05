/**
 * Created by dcreey on 11/5/2016.
 */

const Mocha = require('mocha');
const path = require('path');
const fs = require('fs');

// Instantiate a Mocha instance.
const mocha = new Mocha();
const testDir = ['./models', './questions', './sort'];

// Add each .js file to the mocha instance
testDir.forEach(folder => {
  fs.readdirSync(folder).forEach((fileName) => {
    const stats = fs.lstatSync(path.join(folder, fileName));

    if (!stats.isDirectory()) {
      if (fileName.indexOf('spec.js') > -1) {
        mocha.addFile(
          path.join(folder, fileName)
        );
      }
    }
  });
});

// Run the tests.
mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures);  // exit with non-zero status if there were failures
  });
});
