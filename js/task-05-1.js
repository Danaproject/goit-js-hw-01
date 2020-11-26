let price;
let notAvailable;

const countryInputRef = document.querySelector('input[name="country"]');
const buttonRef = document.querySelector('button[class="send"]');

buttonRef.addEventListener('click', function () {
    let country = String(countryInputRef.value);
    country = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
   
    switch (country) {
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
     countryInputRef.value = '';
});
