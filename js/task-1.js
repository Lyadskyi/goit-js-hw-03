// * Задача 1. Генератор slug * //

function slugify(title) {
	const symbols = title.toLowerCase();
	const words = symbols.split(" ").join("-");
	return words;
	}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// ---------- REMARKS OF THE MENTOR ---------- //

// task-1.js - Well executed moments/Добре виконані моменти //

// Функція slugify оголошена і реалізована правильно.
// Змінні symbols та words, мають описові назви, які точно відображають їх призначення.
// Рішення ефективно використовує методи: toLowerCase(), split() та join() для перетворення заголовка в слаг.
