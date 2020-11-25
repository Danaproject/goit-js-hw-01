let country = prompt('Введите название страны, в которую вы хотите оформить доставку');
let price;
let notAvailable;

if (country !== null) {
    country = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
}

switch (country) {
    case null:
        alert('Отменено пользователем!');
        notAvailable = 1;
        break;
    case 'Китай':
        price = 100;
        break;
    case 'Чили':
        price = 250;
        break;
    case 'Австралия':
        price = 170;
        break;
    case 'Индия':
        price = 80;
        break;
    case 'Ямайка':
        price = 120;
        break;
    default:
        alert('В вашей стране доставка не доступна');
        notAvailable = 1;
}
if (notAvailable !== 1) {
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
}
