/*The resources come from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code*/


// The for ...of loop
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion" ];

for (const cat of cats) {
  console.log(cat);
}
console.log("-------");

//map and filter
const upperCats =cats.map(cat => cat.toUpperCase())
console.log(upperCats)
console.log("-------")
const filteredCats=cats.filter(cat=>cat.startsWith("L"))
console.log(filteredCats)

//the standard loop
// for (initializer; condition; final - expression) {
//   // code to run
// }
