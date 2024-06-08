let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

let userClickedPattern = [];

var started = false;
var level = 0;

function nextSequence() {
	let randomNumber = Math.floor(Math.random() * 4);
	let randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);
	$("#" + randomChosenColor)
		.fadeOut(50)
		.fadeIn(50);
	playSound(randomChosenColor);
	animatePress(randomChosenColor);
}


$(document).keydown(function (e) {
	nextSequence();
	$("#level-title").text("Level " + level);
	level++;
	started = true;
});

$(".btn").on("click", function () {
	let userChosenColour = this.id;
	userClickedPattern.push(userChosenColour);
	console.log(userClickedPattern);

	playSound(userChosenColour);
	animatePress(userChosenColour);

	$("#level-title").text("Level " + level);
	level++;

	checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
	let audio = new Audio("./sounds/" + name + ".mp3");
	audio.play();
}

function animatePress(currentColour) {
	$("." + currentColour).addClass("pressed");
	setTimeout(function () {
		$("." + currentColour).removeClass("pressed");
	}, 100);
}

function checkAnswer(currentLevel) {

	if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
		console.log("Success");

		if(gamePattern.length === userClickedPattern.length){
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	}
	else {
		console.log("Wrong");
		let audio = new Audio("./sounds/wrong.mp3");
		audio.play();

		
		$("body").addClass("game-over");

		setTimeout(function () {
			$("body").removeClass("game-over");
		}, 2000);

		$("h1").text("Game Over, Press Any Key to Restart");
		startOver();

	}
}



function startOver() {
	level = 0;
	gamePattern = [];
	started = false;
}
