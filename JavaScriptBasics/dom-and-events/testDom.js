const container=document.querySelector("#container")

const content=document.createElement("div")
content.textContent="This is the glorious text-content!"
content.classList.add("content")

container.appendChild(content)


/* Exercise */
const p1=document.createElement("p")
p1.textContent = "Hey I'm red!";
p1.style.color="red" //camelCase with dot notation
container.appendChild(p1)

const h1 = document.createElement("h3");
h1.textContent = "I'm a blue h3!";
h1.style["color"]= "blue"; //bracket notation
container.appendChild(h1);


const anotherDiv=document.createElement("div")
anotherDiv.style.border="black solid 2px"
anotherDiv.style.backgroundColor="pink"
/* equals to */ 
// anotherDiv.style.cssText="border:black solid 2px;background-color:pink;"
/* equals to */ 
// anotherDiv.setAttribute(
//   "style",
//   "border:black solid 2px;background-color:pink;"
// );

const anotherH1=document.createElement("h1")
anotherH1.textContent="I'm in a div"
anotherDiv.appendChild(anotherH1)

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
anotherDiv.appendChild(p2);

container.appendChild(anotherDiv)