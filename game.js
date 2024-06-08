let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

let userClickedPattern = [];

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

// let audio = new Audio("./sounds/" + randomChosenColor + ".mp3");
// audio.play();
// console.log("./sounds/" + randomChosenColor + ".mp3");
let level = 0;
$(document).keydown(function (e) {
	// // console.log(e.key);
	// let userChosenColour = e.key;
	// userClickedPattern.push(userChosenColour);
	// console.log(userClickedPattern);

	nextSequence();
	$("#level-title").text("Level " + level);
	level++;
});

$(".btn").on("click", function () {
	let userChosenColour = this.id;
	// console.log(userChosenColour);
	userClickedPattern.push(userChosenColour);
	console.log(userClickedPattern);
	// let audio = new Audio("./sounds/" + userChosenColour + ".mp3");
	// audio.play();
	playSound(userChosenColour);
	animatePress(userChosenColour);
	// nextSequence();
	$("#level-title").text("Level " + level);
	level++;
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
    
}
