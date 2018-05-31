var num = 33721;
var strNum = num.toString();
var result = 1;

 for (var i = 0; i < strNum.length; i++) {
  result = result * parseInt(strNum[i]);
 }

console.log(`Произведение цифр числа 33721 =`, result);

result = Math.pow(result, 3);
var strResult = result.toString();

alert(strResult[0] + strResult[1]);