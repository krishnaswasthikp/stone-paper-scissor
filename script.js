let userScore=0;
let compScore=0;
let isWin=true;
let user=document.querySelector("#user");
let comp=document.querySelector("#comp");
let msg=document.querySelector("#msg");
let choices=document.querySelectorAll(".choice");
let options=["rock","paper","scissors"];
const computerNo=()=>{
    return options[Math.floor(Math.random()*3)];   
}
const showWinner=(isWin,userChoice,compChoice)=>{
    if(isWin){
        userScore++;
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.color="green";
        user.innerText=userScore;
}else{
    compScore++;
    msg.innerText=`You lose! ${compChoice} beats ${userChoice}`;
    msg.style.color="red";
    comp.innerText=compScore;
}
}
const playGame=(userChoice)=>{
    let compChoice=computerNo();
    console.log(`compChoice:${compChoice}`);
    if(userChoice===compChoice){
        msg.innerText=`It's a tie! You both chose ${userChoice}`;
        msg.style.color="orange";
    }else if(userChoice==="rock"){
        isWin=compChoice==="scissors"?true:false;
    }else if(userChoice==="paper"){
        isWin=compChoice==="rock"?true:false;
    }else{
        isWin=compChoice==="paper"?true:false;
    }
    showWinner(isWin,userChoice,compChoice);
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log(`userChouse:${userChoice}`);
        playGame(userChoice);
    })
})
