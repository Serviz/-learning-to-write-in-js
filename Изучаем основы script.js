// Нарисуем котов))

/*var drawCats = function (howManyTimes) {
 for (var i = 0; i < howManyTimes; i++) {
 console.log(i + " =^.^=");
 }
};
drawCats(10); */

/*var text = "эЙ, кАК деЛа";

var firstLetter = text[0];

var newFirstLetter = firstLetter.toUpperCase();

var otherLetters = text.slice(1);

var newOtherLetters = otherLetters.toLowerCase();

var sentence = newFirstLetter + newOtherLetters;

sentence;*/

/*var text = "прЯниК, тЫ тЮлЕнь?"

text

var firstLetter = text[0]

var newFirstLetter = firstLetter.toUpperCase()

var seal = text.slice(11)

var sealUpper = seal.toUpperCase()

var otherText = text.slice(1,11)

var middleText = otherText.toLowerCase()

var sentence = newFirstLetter + middleText + sealUpper; */

/*var sillyString = "эЙ, кАК деЛа?";

sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();
*/

// Сделайте генератор случайных дразнилок со своим набором слов.
/*
var randomBodyParts = ["глазки", "губки","щечки","ножки"];
var randomAdjectives = ["милее","красивее","аппетитнее","сочнее"];
var randomAnimalBodys = ["хвост","задница","грива"];
var randomAnimals = ["собаки","слоника","зайченка"];
var randomBodyPart = randomBodyParts [Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives [Math.floor(Math.random() * randomAdjectives.length)];
var randomAnimalBody = randomAnimalBodys [Math.floor(Math.random()* randomAdjectives.length)];
var randomAnimal = randomAnimals [Math.floor(Math.random() * randomAnimals.length)];
var randomInsult = "У тебя " + randomBodyPart + " ещё более " + randomAdjective + ", " + "чем " + randomAnimalBody + " у " + randomAnimal;
randomInsult
*/
//#3. Оператор + или join? Сделайте две версии своего генератора дразнилок: одна пусть использует для составления дразнилки оператор +, а другая создает массив со словами и соединяет их через пробел с помощью join. Какой вариант вам больше нравится и почему?
/*

var randomBodyParts = ["глазки", "губки","щечки","ножки"];
var randomAdjectives = ["милее","красивее","аппетитнее","сочнее"];
var randomAnimalBodys = ["хвост","задница","грива"];
var randomAnimals = ["собаки","слоника","зайченка"];
var randomBodyPart = randomBodyParts [Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives [Math.floor(Math.random() * randomAdjectives.length)];
var randomAnimalBody = randomAnimalBodys [Math.floor(Math.random()* randomAdjectives.length)];
var randomAnimal = randomAnimals [Math.floor(Math.random() * randomAnimals.length)];
var randomInsult = ["У тебя", randomBodyPart, "еще более" , randomAdjective ,"," , "чем" , randomAnimalBody , "y" , randomAnimal].join(" ");
randomInsult
*/

//#4. Соединение чисел Как с помощью метода join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1"?

/*
var numbers = [3, 2, 1];
numbers.join(" больше "); */


/*#1. Подсчет очков
Представьте, что вы играете в какую-нибудь игру со своими друзьями и вам нужно вести счет. Создайте для этого объект и назовите
его scores. Пусть ключами будут имена ваших друзей, а значениями — набранные ими очки (0 или больше). Счет игроков надо
будет увеличивать по мере того, как они зарабатывают новые
очки. Как вы будете менять счет игрока, хранящийся в объекте
scores?

var scores = {
eldar : 1,
igor : 2,
polina : 3 };
scores.eldar += 3;
scores

#2. Вглубь объектов и массивов
Пускай у вас есть такой объект:
var myCrazyObject = {
"name": "Нелепый объект",
"some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
"random animal": "Банановая акула"
};
Как одной строкой JavaScript-кода извлечь из этого объекта
число 123? Проверьте свое решение, запустив его в консоли.

delete myCrazyObject["some array"][2].number; */
