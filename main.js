// let search = document.querySelector('.search-box')

// document.querySelector('#search-icon') .onclik = () =>{
//     search.classList.toggle('active');
//     // navbar.classList.remove('active');
// }

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');   
    // search.classList.remove('active');
   
   
}

window.oncroll = () => {
    navbar.classList.remove('active'); 
}


//Header Animation
let header = document.querySelector('header');

windows.addEventListener('scroll', () => {
    header.classList.toggle('active', windows.scrollY > 0);
})