// * Задача 2. Композиція масивів * //

function makeArray(firstArray, secondArray, maxLength) {
	const collection = firstArray.concat(secondArray);
	const result = collection.slice(0, maxLength);
	return result;
	}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// ---------- REMARKS OF THE MENTOR ---------- //

// task-2.js - Well executed moments/Добре виконані моменти //

// Гарна назва змінних.
// Використання методу з'єднання (concat).
// Динамічне змінення розміру масивів.
