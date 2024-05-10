const input = document.querySelector("input");
const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click",()=>{
  const li=document.createElement("li")
  li.textContent=input.value


  const deleteBtn  = document.createElement("button")
  deleteBtn.textContent="Delete"
  deleteBtn.addEventListener("click",()=>{
    li.remove()
  })
  li.appendChild(deleteBtn)

  ul.appendChild(li)
  
  input.value = "";
})