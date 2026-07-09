/*========================================
        CALCULATOR LOGIC
========================================*/

const display = document.getElementById("result");
const history = document.getElementById("history");

let expression = "";

/*========================================
        APPEND VALUE
========================================*/

function appendValue(value){

    const operators = ["+","-","*","/","%"];

    const lastChar = expression.slice(-1);

    // Prevent two operators together
    if(
        operators.includes(lastChar) &&
        operators.includes(value)
    ){
        expression =
        expression.slice(0,-1) + value;

        display.value = expression;

        return;
    }

    // Prevent multiple decimals
    if(value === "."){

        let parts =
        expression.split(/[+\-*/%]/);

        let current =
        parts[parts.length-1];

        if(current.includes(".")){
            return;
        }

    }

    expression += value;

    display.value = expression;

}

/*========================================
            CLEAR
========================================*/

function clearDisplay(){

    expression = "";

    display.value = "";

}

/*========================================
            DELETE
========================================*/

function deleteLast(){

    expression =
    expression.slice(0,-1);

    display.value =
    expression;

}

/*========================================
        CALCULATE
========================================*/

function calculate(){

    if(expression === "") return;

    try{

        let answer =
        Function(
        '"use strict"; return (' +
        expression +
        ')'
        )();

        if(answer === Infinity){

            display.value = "Error";

            expression = "";

            return;

        }

        // Format long decimals
        if(
            Number.isFinite(answer)
        ){

            answer =
            parseFloat(
            answer.toFixed(8)
            );

        }

        history.innerHTML =
        expression + " = " + answer;

        expression =
        answer.toString();

        display.value =
        expression;

    }

    catch{

        display.value = "Error";

        expression = "";

    }

}

/*========================================
        DIGITAL CLOCK
========================================*/

function updateClock(){

    const now = new Date();

    let hours = now.getHours().toString().padStart(2,"0");
    let minutes = now.getMinutes().toString().padStart(2,"0");
    let seconds = now.getSeconds().toString().padStart(2,"0");

    document.getElementById("clock").innerHTML =
    `${hours}:${minutes}:${seconds}`;

}

setInterval(updateClock,1000);

updateClock();

/*========================================
        KEYBOARD SUPPORT
========================================*/

document.addEventListener("keydown",function(e){

    const key = e.key;

    if(!isNaN(key)){
        appendValue(key);
        return;
    }

    switch(key){

        case "+":
        case "-":
        case "*":
        case "/":
            appendValue(key);
            break;

        case ".":
            appendValue(".");
            break;

        case "%":
            appendValue("%");
            break;

        case "Enter":
        case "=":
            e.preventDefault();
            calculate();
            break;

        case "Backspace":
            deleteLast();
            break;

        case "Escape":
            clearDisplay();
            break;

    }

});

/*========================================
        BUTTON CLICK EFFECT
========================================*/

const buttons =
document.querySelectorAll(".buttons button");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.transform="scale(.92)";

        setTimeout(()=>{

            button.style.transform="scale(1)";

        },120);

    });

});

/*========================================
        HISTORY DEFAULT
========================================*/

function resetHistory(){

    if(expression===""){

        history.innerHTML =
        "No Recent Calculation";

    }

}

const originalClear = clearDisplay;

clearDisplay = function(){

    originalClear();

    resetHistory();

};

/*========================================
        PREVENT STARTING WITH OPERATOR
========================================*/

const oldAppend = appendValue;

appendValue = function(value){

    const operators=["+","-","*","/","%"];

    if(expression==="" && operators.includes(value)){

        return;

    }

    oldAppend(value);

};

/*========================================
        DISPLAY ANIMATION
========================================*/

display.addEventListener("input",()=>{

    display.style.boxShadow =
    "0 0 20px rgba(10,132,255,.5)";

    setTimeout(()=>{

        display.style.boxShadow =
        "";

    },200);

});

/*========================================
        PAGE LOAD EFFECT
========================================*/

window.addEventListener("load",()=>{

    document.querySelector(".calculator")
    .style.opacity="1";

});

/*========================================
        END
========================================*/