// Дано произвольное целое число `n`. Написать программу, которая:

// - разбивает число `n` на цифры и выводит их на экран;
// - подсчитывает сколько цифр в числе `n` ;
// - находит сумму цифр числа `n` ;
// - меняет порядок цифр числа `n` на обратный;

// Пример: 

// Вводим число 123

// — цифр в числе:  3

// — сумма:  6

// — обратный порядок:  321

let n = 9876345;
function manipulateNum(num) {
    num < 0 ? num = num * -1 : num;
    let numArr = (""+num).split("");
    alert(numArr);
    console.log(numArr.length);
    let sum = numArr.reduce((acc, current) => acc + +current, 0);
    console.log(sum);
    console.log(numArr.reverse().join(''));
}

manipulateNum(n);
