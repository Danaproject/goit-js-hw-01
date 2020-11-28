let credits = 23580;
const pricePerDroid = 3000;
const numberOfDoid = prompt('Какое количество дроидов вы хотите приобрести?');
let totalPrice;

if (numberOfDoid === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = numberOfDoid * pricePerDroid;

    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        credits -= totalPrice;
        console.log(`Вы купили ${numberOfDoid} дроидов, на счету осталось ${credits} кредитов.`);
    }
}