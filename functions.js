/*var drawCats = function (howManyTimes) {
 for (var i = 0; i < howManyTimes; i++) {
 console.log(i + " =^.^= ") }
 }
 drawCats(10) */


//Генератор Дразнилок 
/*
var pickRandomWord = function (words) {
 return words[Math.floor(Math.random() * words.length)];
};
var generateRandomInsult = function () {
	var randomBodyParts = ["глаз", "нос", "череп"];
	var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
	var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
	var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!"
	return randomString;
}
generateRandomInsult(); */

// Пятая буква имени,  если имя меньше 4х символов - undefined

/*
var fifthLetter = function(name) {
 if (name.length < 5 ){
return ;
 }
else { return "Пятая буква твоего имени " + name[4] + "."} }

fifthLetter("Семён")*/

/*function multiply(number1, number2){
	multiplyResult = number1 * number2
	return multiplyResult }
	multiply(34334,43)

	function add(number3, number4){
	addResult = number3 + number4
	return addResult;}
	add(777,0)

	var result = add(multiply(36325, 9824), 777);
	console.log(result) */

/*
Напишите функцию areArraysSame, которая принимает два
массива с числами в качестве аргументов. Она должна возвращать true, если эти массивы одинаковые (то есть содержат одни
и те же числа в одном и том же порядке), или false, если массивы различаются. Убедитесь, что ваша функция работает правильно, запустив такой код:
areArraysSame([1, 2, 3], [4, 5, 6]);
false
areArraysSame([1, 2, 3], [1, 2, 3]);
true
areArraysSame([1, 2, 3], [1, 2, 3, 4]);
false
Подсказка 1: вам понадобится перебрать все значения из первого массива в цикле for и убедиться, что они совпадают со значениями из второго массива. Вы можете вернуть false прямо
из тела for, если обнаружите несовпадающие значения.
Подсказка 2: вы можете сразу выйти из функции, пропустив
цикл for, если у массивов разная длина.


	function areArraysSame(array1,array2){
		for (var i=0; i<array1.length;i++){
		if (array1[i] !== array2[i]||array1.length !== array2.length) {
		return false }
		else { return true }
		}
		}
		areArraysSame([1, 2, 3], [4, 5, 6]);
false
areArraysSame([1, 2, 3], [1, 2, 3]);
true
areArraysSame([1, 2, 3], [1, 2, 3, 4]);
false
