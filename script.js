const icons = document.querySelectorAll(".section-1-icons i")
let i = 1

setInterval(() =>{

   const icon = document.querySelector(".section-1-icons .change")
   
   icon.classList.remove("change")
   
   if (i > icons.length){
      
   }   
   
   icon.nextElementSibling.classList.add("change")

}, 1000)
