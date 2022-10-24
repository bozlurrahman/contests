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

    var firstLine = readline().split(" ").map(x => parseInt(x));
    var n = firstLine[0]
    var k = firstLine[1]
    var s = readline().split(" ").map(x => parseInt(x));

    var a = [];
    var out

    for (let i = 0; i < k; i++) {
      var tempA = 0
      for (let j = 0; j < n - i + 1; j++)
        tempA +=
          a[i] = s[n - i + 1]

      // for (int i = k - 1; i > 0; i--) {
      //   if (max < s[i] - s[i - 1]) {
      //     cout << "No\n";
      //     return;
      //   }
      //   max = s[i] - s[i - 1];
      // }
      // if (max * (n - k + 1) < s[0]) {
      //   cout << "No\n";
      // }
      // else {
      //   cout << "Yes\n";
      // }

    }

    out = a.join(' ') + '\n'
    process.stdout.write(out);
    // console.log(out);

  }

}
// function foo(x) {
//   process.stdout.write("hello: ");   // without auto '\n' (newline)
//   console.log(x);  // with auto '\n' (newline)
// }