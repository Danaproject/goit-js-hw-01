const total = 100;  //количество товаров на складе
let ordered = 50;  //единиц товара в заказе
let message;
if (ordered > total) {
    message = 'На складе недостаточно товаров!';
} else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
}
console.log(message);

ordered = 20;
if (ordered > total) {
    message = 'На складе недостаточно твоаров!';
} else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
}
console.log(message);

ordered = 80;
message = ordered > total ? 'На складе недостаточно твоаров!' : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message);

ordered = 130;
message = ordered > total ? 'На складе недостаточно твоаров!' : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message);