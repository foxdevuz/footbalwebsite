"use strick";
let nav = document.querySelector(".rwdNav")
let bunNav = document.getElementById("openNav")
let remove =document.getElementById("remove")


bunNav.addEventListener("click", ()=> {
  nav.classList.add("showNav")
})
remove.addEventListener("click",()=> {
  nav.classList.remove("showNav")
})