const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector ('.header.containerr');


hamburger.addEventListener('click',()=>{
hamburger.classList.toggle('active'); 
mobile_menu.classList.toggle('active');

});

document.addEventListener('scroll',()=>{
var scroll_position = window.scrollY;
if(scroll_position > 250){
header.style.backgroundColor ='#000635';
}else{
    header.style.backgroundColor ='#000635a6';
}

});


var fullImgBox = document.getElementById("full-img-box");
var fullImg = document.getElementById("full-img");

    function openFullImg(pic) {
        fullImgBox.style.display = "flex";
        fullImg.src = pic;
}   
    

function closeFullImg() {
    fullImgBox.style.display = "none";
}

window.addEventListener('scroll', revealleft);

function revealleft() {
    var reveals = document.querySelectorAll('.reveal-left');

    for (let i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealright);
function revealright() {
    var reveals = document.querySelectorAll('.reveal-right');

    for (let i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

