// let function1= e=>{
//   console.log(e.target)
//   let r=Math.round(Math.random()*255)
//   let g = Math.round(Math.random() * 255);
//   let b = Math.round(Math.random() * 255);
//   e.target.style.backgroundColor=`rgb(${r},${g},${b})`
// }

// const btn1 =document.querySelector("#btn1")
// btn1.onclick=function1

// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click",function1)

/*Add eventListeners to a group of elements. 
forEach's parameter is a callback funtion which will apply to each element
*/
document.querySelectorAll("button").forEach(btn => btn.addEventListener("click",
  e=>{
      let r=Math.round(Math.random()*255)
      let g = Math.round(Math.random() * 255);
      let b = Math.round(Math.random() * 255);
      e.target.style.backgroundColor=`rgb(${r},${g},${b})`
  }
))