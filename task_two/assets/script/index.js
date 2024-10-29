const alphabet="абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let indexOne=Math.floor(Math.random() * (alphabet.length - 1));
console.log(indexOne);
let indexTwo = Math.floor(Math.random() * (alphabet.length - 1));
console.log(indexTwo);
let indexThree = Math.floor(Math.random() * (alphabet.length - 1));
console.log(indexThree);
let indexFour = Math.floor(Math.random() * (alphabet.length - 1));
console.log(indexFour);

const newWord=alphabet[indexOne]+alphabet[indexTwo]+alphabet[indexThree]+alphabet[indexFour];
console.log(newWord);


const randomWord = document.querySelector(".text");
randomWord.innerHTML = `Случайное слово: ${newWord}`;