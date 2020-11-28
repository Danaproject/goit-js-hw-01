let credits = 23580;
const pricePerDroid = 3000;
const numberInputRef = document.querySelector('input[name="number"]');
const buttonRef = document.querySelector('button[class="buy"]');

buttonRef.addEventListener('click', function () {
    console.log('количество дроидов:', numberInputRef.value);
    const numberOfDoid = numberInputRef.value;
    const totalPrice = numberOfDoid * pricePerDroid;

    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        credits -= totalPrice;
        console.log(`Вы купили ${numberOfDoid} дроидов, на счету осталось ${credits} кредитов.`);
    }
    numberInputRef.value = '';
});
