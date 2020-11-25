let message;
const ADMIN_PASSWORD = 'jqueryismyjam';
const password = prompt('Введите пароль, пожалуйста');

if (password === null) {
    message = 'Отменено пользователем!'; 
} else if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

