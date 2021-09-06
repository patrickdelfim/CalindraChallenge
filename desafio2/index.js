const btnMenu = document.querySelector("#btnMenu")
const menu = document.querySelector("#menu")
const body = document.querySelector("body")
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")

btnMenu.addEventListener("click", (e)=>{
    
    if(menu.classList.contains("showNav")){
        body.style.overflow = "scroll"
        menu.classList.remove("showNav");
        line1.classList.remove("line1-open")
        line2.classList.remove("line2-open")
        line3.classList.remove("line3-open")
        
    }else{
        body.style.overflow = "hidden"
        menu.classList.add("showNav");
        line1.classList.add("line1-open")
        line2.classList.add("line2-open")
        line3.classList.add("line3-open")
    }

})