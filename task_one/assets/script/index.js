const textElement=document.querySelector('.text');
let text=textElement.textContent;
console.log(text);
// Выведите в консоль количество символов в тексте.
console.log(`1. Количество символов в тексте: ${text.length}`);
// Добавьте перенос строки после каждого символа ; и сохраните результат в переменную result.
const result=text.replace(/;/g,"\n");
console.log(`2. Текст с переносами строк: \n ${result}`);
// Удалите все пробелы в переменной result и сохраните результат в переменную substring.
const substring=result.replace(/ /g,"");
console.log(`3. Текст с удалёнными пробелами:\n ${substring}`);
// Извлеките подстроку из переменной result, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную newText.
const newText=result.substring(28,50);
console.log(`4. Извлечение подстроки: \n ${newText}`);
// Замените в извлеченной подстроке (newText) все вхождения слова клён на дубе и сохраните результат в переменную replacedText.
const replacedText=newText.replace("клён","дубе");
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
// Приведите текст в переменной result к верхнему регистру и сохраните результат в переменную replacedText2.
const replacedText2=result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
// Замените все вхождения слова клён на дуб в переменной result и сохраните результат в переменную replacedText3.
const replacedText3=result.replace(/клён/g,"дуб");
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);

// Найдите индекс первого вхождения слова моря в тексте и сохраните в переменную index.
const index=text.indexOf("моря");
console.log(`8. Индекс первого вхождения "моря": ${index}`);
// Измените только первую букву в переменной replacedText на заглавную без использования регулярных выражений и сохраните результат в переменную modifiedText.
const modifiedText=replacedText[0].toUpperCase()+ replacedText.substring(1);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);


