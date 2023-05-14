var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["green", "red", "yellow", "blue"];
var firstKeyPress = [];

var started = false;
var level = 0;

$(document).on("keypress", function (event) {

    if (!started) {

        $("#level-title").html("level " + level);
        nextSequence();
        started = true;

    }

})




function checkAnwser(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }
    } else {
        error();
        console.log("wrong");

    }

    function error() {
        console.log("error function called");
        var error = new Audio("/sounds/wrong.mp3");
        error.play();
        gamePattern=[];
        userClickedPattern=[];
        level=0;
        $("#level-title").html("Game ove, Press A Key To Start");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
            started = false;
        }, 200)

        $(body).addClass(".game-over");

  
    }

}

$(".btn").on("click", function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    var lastIndex = userClickedPattern.length - 1;
    checkAnwser(lastIndex);




})


function nextSequence() {
    userClickedPattern = [];
    level++;

    $("#level-title").html("level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];

    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);


}
function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
// -------------mobile---------
$("#myButton").on("click",function(){
    console.log("mobile button clicked");
nextSequence();

})
