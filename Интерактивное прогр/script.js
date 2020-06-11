/*var counter = 1;
var printMessage = function () {
	console.log("Ты смотришь в консоль уже " + counter + " cек.");
	counter += 5;
}
var intervalId = setInterval(printMessage, 5000);

clearInterval(intervalId)


var leftOffset = 0;
var moveHeading = function () {
	$("#heading").offset({ left: leftOffset });
	leftOffset++
	if (leftOffset > 200) {


	}
};
setInterval(moveHeading, 10); */

/* var clickHandler = function (event) {
	console.log("Клик! " + event.pageX + " " + event.pageY)
}

$("h1").click(clickHandler)

$("html").mousemove(function (event) {
	$("#heading").offset({
		left: event.pageX,
		top: event.pageY
	})
})

$("html").click function(event) {
	$("#heading").offset({
		left: event.pageX,
		top: event.pageY
	})
}) */

var leftOffset = 0;
var topOffset = 0;
var dir = "right";

var myFunc = function () {
	$("#heading").offset({ left: leftOffset, top: topOffset })
	if (dir == "right")
		leftOffset++;
	else
		leftOffset--;
	if (leftOffset < 0 && topOffset > 0) {
		leftOffset = 0;
		topOffset--;
	}
	else if (topOffset == 0) {
		dir = "right";
	}
	if (leftOffset > 200) {
		leftOffset = 200;

		topOffset++;
		if (topOffset > 200) {
			topOffset = 200;
			dir = "left";
		}
		else if (topOffset < 0) {
			topOffset = 0;
		}
	}
};


var int = setInterval(myFunc, 20)
var int2 = function () { clearInterval(int) }
$("html").click(int2)
var int3 = function () {
	setInterval(myFunc, 5)
}
$("html").click(int3)