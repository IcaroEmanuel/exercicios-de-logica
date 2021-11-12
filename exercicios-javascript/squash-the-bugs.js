/*
ref: Codewars - https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript
Elimine todos os bugs do código fornecido para que o código seja executado e produza o valor esperado.
A saída deve ter o comprimento da palavra mais longa, como um número.
*/

function findLongest(str) {
  
  let arrayOfWords = str.split(" ");
  let longest = 0;
  
  for (let index = 0; index < arrayOfWords.length; index += 1) {
    if (arrayOfWords[index].length > longest) {
      longest = arrayOfWords[index].length;
    }
  }
    return longest;
}
