let gameSeq=[];
let userSeq=[];

let start=false;
let level=0;
let high=0;

let btns = ["red","cornflowerblue","yellowgreen","purple"];

let flash = function(){
    console.log("flash");
}

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");



document.addEventListener("keypress", function(){
    if (start == false){
        console.log("game is started");
        start =true;

        levelup();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}


function levelup(){
    userSeq = [];
    level++;
    h2.innerText=`level ${level}`;
    let randnum= Math.floor(Math.random()*3);
    let randcolor = btns[randnum];
    let randbtn = document.querySelector(`#${randcolor}`);

    


    gameSeq.push(randcolor);
    console.log(gameSeq);

    btnFlash(randbtn);
}



function checkAns(idx){

    if( userSeq[idx] == gameSeq[idx]){
        console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup() , 1000);
        }
    } else {
        h2.innerHTML=`Game over!, your score was <b>${level}</b> <br> press any key to restart`;
        let body = document.querySelector('body');
        body.setAttribute('id','over');
        setTimeout(function (){
        document.body.removeAttribute('id');
        }, 500);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    console.log(userColor);
    userSeq.push(userColor);
    if(level>high){
    high = level;
    h3.innerText =`your hightest score is ${high}`;
}

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll('.box');

for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start = false;
    gameSeq =[];
    userSeq =[];
    level = 0;
    
}


