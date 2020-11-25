let message;
const ADMIN_PASSWORD = 'jqueryismyjam';
const password = prompt('Введите пароль, пожалуйста');

switch (password) {
    case null:
        message = 'Отменено пользователем!';
        break;
    case 'ADMIN_PASSWORD':
        message = 'Добро пожаловать!';
        break;
    default:
        message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
