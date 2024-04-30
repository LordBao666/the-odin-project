/*Basic Array */
const fruits = ["Banana", "Orange", "Apple", "Mango"]
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
const fruitsStr=fruits.toString()
console.log(fruitsStr)
// The JavaScript method split converts a string of (specific character separated) array values to  an array.
const newFruits =fruitsStr.split(",")
console.log(newFruits)


//To iterate over an array,you can use for loop.
//However,here we will introduce  Array.foreach
//The code below will print every fruit in fruits
fruits.forEach( fruit => console.log(fruit))


//typeof cannot tell a variable is an array since it will print object 
//Use Array.isArray or instanceof Array instead
console.log(Array.isArray(fruits))
console.log(fruits instanceof Array)


/*Array Method */
//at method returns the same thing as [].
//However you can NOT use negetive index in [], since [] is used to access Array and Object
console.log(fruits.at(0));
console.log(fruits.at(-1))


const countries = ["CHINA","JAPAN","KOREA" ,"SINGAPORE", "MALAYSIA", "INDONESIA", "MONGOLIA"];
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
const contry = countries.shift()
console.log(contry)

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
countries.unshift(contry)
console.log(countries.at(0))


// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]]
console.log(myArr.flat()) // [ 1,2,3,4,5,6 ]

let letters = [ 'A','B','C','D']
//the first parameter means the place to start,let's call it startPlace,the rest parameters
//mean removing 2 elements from the startPlace，and insert 'c' 'd' at the startPlace
let deletedLetters=letters.splice(2,2,'c','d')  //delete 'C','D' and insert 'c','d'
console.log(letters) // ['A','B','c','d']
console.log(deletedLetters)//['c','d']


