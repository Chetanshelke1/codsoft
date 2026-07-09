/*========================================
        PRELOADER
========================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 500);

});

/*========================================
        SCROLL PROGRESS BAR
========================================*/

const progressBar =
document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    progress + "%";

});

/*========================================
        HEADER SHADOW
========================================*/

const header =
document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.style.background =
        "rgba(255,255,255,.9)";

        header.style.boxShadow =
        "0 10px 30px rgba(15,23,42,.08)";

    }

    else{

        header.style.background =
        "rgba(255,255,255,.75)";

        header.style.boxShadow =
        "none";

    }

});

/*========================================
        MOBILE MENU
========================================*/

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

/*========================================
        CLOSE MENU ON CLICK
========================================*/

document
.querySelectorAll(".nav-links a")
.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

/*========================================
        SCROLL TO TOP
========================================*/

const scrollBtn =
document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY > 350){

scrollBtn.style.opacity="1";

scrollBtn.style.pointerEvents="auto";

}

else{

scrollBtn.style.opacity="0";

scrollBtn.style.pointerEvents="none";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});/*========================================
        COUNTER ANIMATION
========================================*/

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const increment = target / 80;

        const updateCounter = () => {

            if(count < target){

                count += increment;

                counter.innerText =
                Math.ceil(count);

                requestAnimationFrame(updateCounter);

            }

            else{

                counter.innerText =
                target + "+";

            }

        };

        updateCounter();

    });

};

let started = false;

window.addEventListener("scroll",()=>{

const stats =
document.querySelector(".stats");

if(!stats) return;

const top =
stats.getBoundingClientRect().top;

if(top < window.innerHeight-120 && !started){

started = true;

runCounter();

}

});

/*========================================
        REVEAL ON SCROLL
========================================*/

const reveals = document.querySelectorAll(

".feature-card,.service-card,.choose-box,.stat-card,.about-image,.about-content,.contact-info,.contact-form,.value-card"

);

function revealElements(){

reveals.forEach(item=>{

const top =
item.getBoundingClientRect().top;

if(top < window.innerHeight-100){

item.style.opacity="1";

item.style.transform="translateY(0)";

}

});

}

reveals.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".7s ease";

});

window.addEventListener("scroll",revealElements);

window.addEventListener("load",revealElements);

/*========================================
        ACTIVE NAVIGATION
========================================*/

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop =
section.offsetTop-150;

if(window.scrollY>=sectionTop){

current = section.id;

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});

/*========================================
        SMOOTH SCROLL
========================================*/

navItems.forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target =
document.querySelector(
link.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*========================================
        CONTACT FORM
========================================*/

const form =
document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

form.reset();

});

}

/*========================================
        END
========================================*/