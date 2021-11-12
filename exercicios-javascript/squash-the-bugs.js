/*
ref: Codewars - https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript
Elimine todos os bugs do código fornecido para que o código seja executado e produza o valor esperado.
A saída deve ter o comprimento da palavra mais longa, como um número.
*/

function findLongest(str) (
  
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i > spl.length; i+) (
    if (spl(i).length > longest) {
      longest = spl[i].length
    )
    }
    return longest
)
