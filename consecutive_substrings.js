
function consecutiveSubstrings(string) {
  // type your code here
  const conString = [];
  for (let i = 0; i < string.length; i++){
    for(let j = i + 1; j <= string.length;j++){
      let newString = '';
      newString = string.slice(i, j);
      conString.push(newString);
    }
  }
  return conString;
}

console.log(consecutiveSubstrings("hello"));  //testing using these examples
console.log(consecutiveSubstrings("longislandbeach")); //npm test passed

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;



