//SELECTORS
const menubar = document.querySelector(".menu-bar");
const navmenu = document.querySelector('nav');
const navlink =document.querySelectorAll(".navlink");
const   to_top =document.querySelector('.to-top') 

//FUNCTIONS
menubar.onclick = () => {
    navmenu.classList.toggle('active');
}

navlink.forEach(n => n.addEventListener('click', ()=>{
    navmenu.classList.remove("active");
}))

window.onscroll = ()=> {
    if (this.scrollY > 300) {
      to_top.classList.add("show");
    } else {
      to_top.classList.remove("show");
    }
  };

to_top.addEventListener('click', ()=>{
    window.scrollTo({top: 0, behavior:"smooth"})
})