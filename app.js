let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;

let h2=document.querySelector('h2');
document.addEventListener("keypress",function(){
    //console.log("game started");
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
    function userflash(btn){
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash");
        },250);

}
function levelup(){
    userseq=[];

    level++;
    h2.innerText=`level ${level}`;

    let randidx=Math.floor(Math.random()* 4);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
   // console.log(randidx);
    //console.log(randcolor);
   // console.log(randbtn);

    gameflash(randbtn);
}

function checkans(idx){
    if(userseq[idx]=== gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
        else{
            h2.innerHTML=`game over! your score was <b> ${level} </b>press any key to start`;
            reset();
        }
}

function btnpress(){
   // console.log("button was pressed");
  let btn= this;
  userflash(btn);
   let userColor= btn.getAttribute('id');
  userseq.push(userColor);
  checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll('.btn');
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}