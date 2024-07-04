let gameseq=[];
let userseq=[];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow","red","purple","green"];
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started = true;
        levelup();
    }
    // levelup();
})
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);

}
function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randomcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randomcolor}`)
    // console.log(randIdx);
    // console.log(randomcolor);
    // console.log(randbtn);
    gameseq.push(randomcolor);
    gameflash(randbtn);
    console.log(gameseq);
    
}
function checkans(idx){
    // console.log("current level :",level);
    // let idx = level - 1;
    if(userseq[idx]==gameseq[idx]){
        // console.log("same value");
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game over!!! Your score was <b>${level}</b> <br> PRESS ANY KEY TO RE START`;
        document.querySelector("body").style.backgroundImage = "url('istockphoto-1434200534-612x612.jpg')"
        // let new = h.style.color = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundImage = "none";
        },500);
        reset();

    }

}
function btnPress(){
    let btn = this
    userflash(btn);
    let usercolor = btn.getAttribute("id");
    // console.log(usercolor);\
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}