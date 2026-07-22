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
        document.querySelector(".player1").innerHTML="🥳"+playername1+" wins 🥳";
        document.querySelector(".player2").innerHTML="💀"+playername2+" lost 💀";   
    }
    else if(randomP1===randomP2){
        document.querySelector(".player1").innerHTML="⚖️Draw⚖️";    
        document.querySelector(".player2").innerHTML="⚖️Draw⚖️";    
    }
    else{
        document.querySelector(".player2").innerHTML="🥳"+playername2+" wins 🥳";
        document.querySelector(".player1").innerHTML="💀"+playername1+" lost 💀";    
    }
}
var playername1="Player 1";
var playername2="Player 2";
function switchnamep1(){
    if(document.querySelector(".name1").value!==""){
    playername1=document.querySelector(".name1").value;
    document.querySelector(".player1").innerHTML=playername1;
    }
}
function switchnamep2(){
    if(document.querySelector(".name2").value!==""){
    playername2=document.querySelector(".name2").value;
    document.querySelector(".player2").innerHTML=playername2;
    }
}
