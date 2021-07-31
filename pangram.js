const jassPangram = (string) => 
     new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

console.log(jassPangram("abcdefghijklmnopqrstuvwxyz"));  //true
console.log(jassPangram("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")); //false