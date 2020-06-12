var getRandomNumber = function (size) {
	return Math.floor(Math.random() * size);
};

var getDistance = function (event, target) {
	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function (distance) {

	if (distance < 10) {
		return "Обожжешься!";
	} else if (distance < 20) {
		return "Очень горячо";
	} else if (distance < 40) {
		return "Горячо";
	} else if (distance < 80) {
		return "Тепло";
	} else if (distance < 160) {
		return "Холодно";
	} else if (distance < 320) {
		return "Очень холодно";
	} else if (distance < 640) {
		return "Очень-очень холодно!"
	}
	else {
		return "Замерзнешь!";
	}
};

var width = 800;
var height = 800;
var clicks = 0;

var target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
};

$("#map").click(function (event) {
	clicks++;

	if (clicks > 100) {
		alert("Конец игры! Попробуй сначала)")
	}

	var distance = getDistance(event, target);

	var distanceHint = getDistanceHint(distance);

	$("#distance").text(distanceHint);

	if (distance < 15) {
		alert("Клад найден! Сделано кликов: " + clicks);
	}
});