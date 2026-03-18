let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');
let navItem = document.querySelectorAll('.nav-item');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

navItem.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
    })


})

