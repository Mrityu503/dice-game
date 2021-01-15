var diceNumber = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute('src',"images/dice" + diceNumber + ".png");
var diceNumber2 = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute('src',"images/dice" + diceNumber2 + ".png");

if (diceNumber > diceNumber2) 
{
	document.querySelector("h1").innerHTML="Player1 Wins!";
}
else if (diceNumber === diceNumber2)
{
	document.querySelector("h1").innerHTML="Both are losers! LOL";
}
else
{
	document.querySelector("h1").innerHTML="Player2 Wins";
}