let user=0;
let computer=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let userscore=document.querySelector("#user-score");
let comscore=document.querySelector("#computer-score");


const gencom=()=>{
    let arr=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return arr[randidx];
}
const drawgame=()=>{
    msg.innerText="Game was draw";
    msg.style.backgroundColor="blueviolet";

}

const showwinner=()=>{
    if(userwin){
        user++;
        userscore.innerText=user;
        msg.style.backgroundColor="green";
    
    }else{
        computer++;
        comscore.innerText=computer;
        msg.innerText="You loss";
        msg.style.backgroundColor="red";

    }
}

let userwin;
const playgame=(userchoice)=>{
    const comchoice=gencom();

    if(userchoice==comchoice){
        drawgame();
    }else{
        userwin=true;
        if(userchoice=="rock"){
            userwin=comchoice=="paper" ? false:true;
        }else if(userchoice=="paper"){
            userwin=comchoice=="scissor" ? false:true;
        }else{
            userwin=comchoice=="rock"?false:true;
        }
        showwinner(userwin);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});

