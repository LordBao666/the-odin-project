const link=document.querySelector("a")
link.textContent = "Mozilla Developer Network(hahaha)";
link.href = "https://developer.mozilla.org";

// create a new paragraph
const sec=document.querySelector("section")
const para=document.createElement("p")
para.textContent="I love JS"
// para.style.color="pink"
sec.appendChild(para)


//add some text to the graph with link
const textnode=document.createTextNode("Welcome to Javascript")
const linkPara=document.querySelector("p")
linkPara.appendChild(textnode)


//Magic: using appendChild can move an element to the bottom of its parent if it already exists
sec.appendChild(linkPara)

/* remove an element */
// sec.removeChild(linkPara)
// linkPara.remove()
// linkPara.parentNode.removeChild(linkPara)

/* Add css throgh selector. I ommit the method of adding inline css*/
// para.setAttribute("class","highlight")
para.classList.add("highlight")
