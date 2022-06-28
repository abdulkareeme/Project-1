// Make Animation on the phone
var phone = document.getElementById("phone");
var bool = true;
phone.onclick = () => {
    phone.classList.add("animate");
    if (bool) {
        bool = false;
        setTimeout(() => { phone.classList.remove("animate"); bool = true; }, 2000);
    }

}
// End Animation

// start Animation for span 
var loop = document.querySelector(".info .container .content .left-side div");
// var after=document.querySelectorAll(".info .container .content .left-side span::after");
window.addEventListener("scroll", () => {
    if (window.scrollY + (window.innerHeight) >= loop.offsetTop){
    setTimeout(() => {
            loop.firstElementChild.nextElementSibling.firstElementChild.classList.add("loop");
            loop.firstElementChild.firstElementChild.classList.add("loop");
    }, 300);}
    else {
        loop.firstElementChild.nextElementSibling.firstElementChild.classList.remove("loop");
        loop.firstElementChild.firstElementChild.classList.remove("loop");
    }
})

// menu icon responsive 

var iconMenu=document.getElementById("icon-menu");
var ul=document.querySelector("header .container ul");
var menu2= document.querySelector("header .container .menu2");
var counter=0;
iconMenu.onclick=function(){
    if(counter&1 && window.innerWidth <=767){
        ul.style.display="none";
    }
    else{
        ul.classList.add("menu2");
         ul.classList.remove("menu1");
         ul.style.display="block";
    }
    counter++;
}

window.addEventListener("click",(e)=>{
    menu2= document.querySelector("header .container .menu2");
    if(e.target !== iconMenu && menu2 !== undefined && menu2!== null)
    menu2.style.display="none";
})
