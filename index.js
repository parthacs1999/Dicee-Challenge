
let randomNumber1=Math.floor(Math.random()*6)+1;
let randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src",`images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src",`images/dice${randomNumber2}.png`);

let winnerText=(randomNumber1>randomNumber2)?'Player 1 Wins.🥇':'Player 2 Wins.🥇';
if(randomNumber1==randomNumber2){
  winnerText="Match Drawn..";
}

document.querySelector("h1").textContent=winnerText;
