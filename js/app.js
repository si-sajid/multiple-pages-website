//Header Scroll
// let nav = document.querySelector(".navbar");
// window.onscroll = function(){
//     if(document.documentElement.scrollTop > 50){
//               nav.classList.add("header-scrolled");
//     }else{
//         nav.classList.remove("header-scrolled");
//     }
// }
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
            nav.classList.add("header-scrolled")
    }else{
        nav.classList.remove("header-scrolled")
    }
}
//nav hide
let navBar = document.querySelectorAll(".navlink");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapse.classList.remove("show")
    })
})
// Fancybox

Fancybox.bind('[data-fancybox="gallery-item"]', {
    // Your custom options for a specific gallery
  });