var nav=document.querySelector('.flex');
console.log(nav)
var toggle=document.querySelector('.toggle')
console.log(toggle)

toggle.addEventListener('click',()=>{
    if (nav.className === "flex") {
     
        nav.className += "small";
      } else {
        nav.className = "flex";
      }
    }
  
)
