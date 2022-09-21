let openNav = document.getElementById("open")
let closeNav = document.getElementById("close")
let nav= document.getElementById("nav")
let navRemove = document.getElementsByClassName("nav-item")
let loader = document.getElementById("loader")
window.addEventListener("load",()=>{
    setTimeout(()=>{
        loader.classList.add("hidden")
    },500)
})
openNav.addEventListener("click",()=>{
    nav.classList.add('right-0')
})
closeNav.addEventListener("click",()=>{
    nav.classList.remove("right-0")
})
for(items of navRemove){
    items.addEventListener("click",()=>{
        nav.classList.remove("right-0")
    })
}
nav.addEventListener("click",()=>{
    nav.classList.remove("right-0")
})

