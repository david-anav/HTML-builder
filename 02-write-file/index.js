const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = process;

const output = fs.createWriteStream(path.join(__dirname, 'destination.txt'));

stdout.write('Hi my friend, please write your name!!\n');

stdin.on('data', (data) => {
  const toStr = data.toString();
  const over = toStr.includes('exit');
  if (over) {
    stdout.write('GoodBay!!!!');
    exit();
  } else {
    output.write(toStr);
  }
});

process.on('SIGINT', () => {
  stdout.write('GoodBay!!!!');
  exit();
});
