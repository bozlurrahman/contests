'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readline() {
  return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();


function main() {
  const mainLength = readline();
  var counter = 0;
  var out
  for (let l = 0; l < mainLength; l++) {

    var d = readline().split(" ").map(x => parseInt(x));

    if (d[1] - d[0] > 1)
      counter++



  }

  process.stdout.write(counter.toString());
}