var playerName1 = prompt("Enter Player 1's name");
var playerName2 = prompt("Enter Player 2's name");

var p1Button=document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display= document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver =false;
var winningScoreDisplay = document.querySelector("p span");
var resetButton=document.querySelector("#reset");
var winningScore = 5;
p1Button.textContent=playerName1;
p2Button.textContent=playerName2;
p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent =p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent =p2Score;
	}
});

resetButton.addEventListener("click",function(){
	reset();
});

function reset(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent=p1Score;
	p2Display.textContent=p2Score;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(this.value);
	reset();
});