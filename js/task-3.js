// * Задача 3. Фільтрація масиву чисел * //

function filterArray(numbers, value) {
	let result = [];
	for (let i = 0; i < numbers.length; i++) {
		if (value  )
	}
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// Self Check - - Автоперевірка //
// Функція getSlice(array, value) приймає два параметра:
// array - масив довільних елементів;
// value - значення елемента масиву для пошуку.
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:
// порожній масив, якщо в array немає елемента зі значенням value;
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array.

// Оголошена функція getSlice(array, value). //
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Poly") повертає ["Mango", "Poly"] //
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Ajax") повертає ["Mango", "Poly", "Ajax"] //
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Mango") повертає ["Mango"] //
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Jacob") повертає [] //
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Casey") повертає [] //

function getSlice(array, value) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      result = array.slice(0, i + 1);
      break;
    }
  }
  return result;
}

console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // ["Mango", "Poly"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); // ["Mango", "Poly", "Ajax"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")); // ["Mango"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")); // []
console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")); // []