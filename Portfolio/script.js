const words = [
    "Web Developer",
    "Frontend Developer",
    "BCA Student",
    "CodSoft Intern"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type(){

    let current = words[wordIndex];

    if(!deleting){
        typing.textContent = current.substring(0,charIndex++);
    }else{
        typing.textContent = current.substring(0,charIndex--);
    }

    if(charIndex===current.length+1){
        deleting=true;
        setTimeout(type,1000);
        return;
    }

    if(charIndex===0 && deleting){
        deleting=false;
        wordIndex=(wordIndex+1)%words.length;
    }

    setTimeout(type,deleting?70:120);

}

type();

/* Theme Toggle */

const btn=document.getElementById("theme-toggle");

btn.onclick=function(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

document.body.style.background="#f8fafc";
document.body.style.color="#111";

}else{

document.body.style.background="#0f172a";
document.body.style.color="#fff";

}

}