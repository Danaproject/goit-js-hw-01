let total = 0;
let input;

while (input !== null) {
    input = prompt('Введите число');
    if (input === null) {
        break;
    }
    input = Number(input);
    
    const notANumber = Number.isNaN(input);
    if (notANumber) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    total += input;
} 

alert(`Общая сумма чисел равна ${total}`);