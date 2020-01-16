let moreFruit = "banana\napple\npineapple\nkiwi";
let fruit = "avocado, apple, kiwi, orange, blueberry"
console.log(moreFruit);

// String methods
console.log(moreFruit.length);
console.log(moreFruit.indexOf('kiwi'));
console.log(moreFruit.slice(2, 12));
console.log(moreFruit.slice(13, 27));
console.log(fruit.toUpperCase());
console.log(moreFruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(",")); //split by a comma
console.log(fruit.split('')); //split by character

// Array
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
let moreFruits = new Array('blueberry', 'avocado', 'blackberry', 'strawberry');

console.log(fruits[3]); // acess value at index
console.log(moreFruits[2]);

fruits[0] = 'pear';
console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('to string\n', fruits.toString());
console.log(fruits.join(' / '));
console.log(fruits.pop(), fruits); // removes last item
console.log(fruits.push('blackberries', 'kiwis'), fruits); // appends
console.log(fruits[5]);
fruits[fruits.length] = 'newFruit'; // same as push
console.log(fruits);
fruits.shift();         // removes first Item from List
console.log(fruits);
fruits.unshift('moreOranges'); // add first element to an array
console.log(fruits);

let vegetables = new Array('Spargel', 'Tomate', 'Karotte');
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);

