var dices=["./images/diceof 1.png",
           "./images/diceof 2.png",
           "./images/diceof 3.png",
           "./images/diceof 4.png",
           "./images/diceof 5.png",
           "./images/diceof 6.png"];
function switchdice(){
    var randomP1=Math.random();
    var randomP2=Math.random();
    randomP1=Math.floor(randomP1*6);
    randomP2=Math.floor(randomP2*6);
    document.querySelector(".dice1").src=dices[randomP1];
    document.querySelector(".dice2").src=dices[randomP2];
    if(randomP1>randomP2){
        document.querySelector(".player1").innerHTML="🥳Player 1 Wins🥳";
        document.querySelector(".player2").innerHTML="💀Player 2 lost💀";    
    }
    else if(randomP1===randomP2){
        document.querySelector(".player1").innerHTML="⚖️Draw⚖️";    
        document.querySelector(".player2").innerHTML="⚖️Draw⚖️";    
    }
    else{
        document.querySelector(".player2").innerHTML="🥳Player 2 Wins🥳";
        document.querySelector(".player1").innerHTML="💀Player 1 lost💀";    
    }
}
function switchnamep1(){
    document.querySelector(".player1").innerHTML=document.querySelector(".name1").value;
}
function switchnamep2(){
    document.querySelector(".player2").innerHTML=document.querySelector(".name2").value;
}