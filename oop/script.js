/*var dog = {
	age: 27,
	name: "Bill",
	isAweSome: true

}

dog.bark = function () {
	console.log("Гав-гав " + "Меня зовут " + this.name + "!")
}
dog.bark()
-------------------------------------------------------------------------------------
var speak = function () {
	console.log(this.sound + "! Меня зовут " + this.name + "!");
};

var cat = {
	sound: "Мяу",
	name: "Варежка",
	speak: speak
}

cat.speak() */
// --------------------------------------------------------------------------- 
/*var Car = function (x, y) {
	this.x = x,
		this.y = y
}

var drawCar = function (car) {
	var carHtml = '<img src="https://i.infocar.ua/i/12/3232/1400x936.jpg">';
	var carElement = $(carHtml)
	carElement.css({
		position: "absolute",
		top: car.y,
		left: car.x
	})
	$("body").append(carElement)
}
var tesla = new Car(20, 20);
var nissan = new Car(100, 200);
drawCar(tesla);
drawCar(nissan);
*/
//-------------------------------------------------------------------------------

// PROTOTYPE 

var Car = function (x, y) {
	this.x = x,
		this.y = y
}
Car.prototype.draw = function () {
	var carHtml = '<img src = "https://i.infocar.ua/i/12/3232/1400x936.jpg">'
	this.carElement = $(carHtml)
	this.carElement.css({
		position: "absolute",
		left: this.x,
		top: this.y
	})
	$("body").append(this.carElement)
}

Car.prototype.moveRight = function () {
	this.x += 5

	this.carElement.css({
		left: this.x,
		top: this.y
	})
}


var tesla = new Car(40, 40)
var nissan = new Car(80, 70)

tesla.draw();
nissan.draw()

tesla.moveRight();

