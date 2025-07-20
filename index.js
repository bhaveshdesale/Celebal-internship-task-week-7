let myColor = ["Red", "Green", "White", "Black"];

console.log("Joined with default (,):", myColor.join());
console.log("Joined with ',':", myColor.join(','));
console.log("Joined with '+':", myColor.join('+'));

console.log("\n-----------------------\n");

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let freq = {};
let max = 0;
let mostFrequent;

for (let item of arr1) {
  freq[item] = (freq[item] || 0) + 1;
  if (freq[item] > max) {
    max = freq[item];
    mostFrequent = item;
  }
}

console.log(`Most frequent: ${mostFrequent} ( ${max} times )`);

console.log("\n-----------------------\n");

function truncateString(str, num) {
  return str.slice(0, num);
}

console.log("Truncated string:", truncateString("Robin Singh", 4)); // "Robi"

console.log("\n-----------------------\n");


function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log("Capitalized words:", capitalizeWords('js string exercises'));

console.log("\n-----------------------\n");


function arrBetween(a, b, arr) {
  return arr.filter(n => n > a && n < b);
}

console.log("arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞", arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
console.log("arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞", arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
console.log("arrBetween(7, 32, [1, 2, 3, 78]) ➞", arrBetween(7, 32, [1, 2, 3, 78]));

console.log("\n-----------------------\n");


function findIndex(arr, val) {
  return arr.indexOf(val);
}

console.log("findIndex(['hi', 'edabit', 'fgh', 'abc'], 'fgh') ➞", findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log("findIndex(['Red', 'blue', 'Blue', 'Green'], 'blue') ➞", findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log("findIndex(['a', 'g', 'y', 'd'], 'd') ➞", findIndex(["a", "g", "y", "d"], "d"));
console.log("findIndex(['Pineapple', 'Orange', 'Grape', 'Apple'], 'Pineapple') ➞", findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));
