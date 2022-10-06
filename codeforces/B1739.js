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
  for (let l = 0; l < mainLength; l++) {

    var n = readline();
    var d = readline().split(" ").map(x => parseInt(x));
    var a = [];
    var checked = false;
    var out

    for (let i = 0; i < n; i++) {
      if (i == 0)
        a[i] = (d[i])
      else {
        var i_one = a[i - 1];
        var x = d[i] + a[i - 1];
        // var y = d[i] - a[i - 1];
        var y = Math.abs(d[i] - a[i - 1]);
        var cond1 = (Math.abs(x - i_one))
        var cond2 = (Math.abs(y - i_one))
        if (
          cond1 == cond2
          && (x != y)
        ) {
          // if ((x < 0 && y < 0) && (x != y)) {
          checked = true;
          break;
        } else if (cond1 == d[i]) {
          a[i] = x
        } else {
          a[i] = y
        }
      }
    }
    if (checked)
      out = '-1' + '\n'
    else
      out = a.join(' ') + '\n'
    process.stdout.write(out);
    // console.log(out);

  }

}
// function foo(x) {
//   process.stdout.write("hello: ");   // without auto '\n' (newline)
//   console.log(x);  // with auto '\n' (newline)
// }