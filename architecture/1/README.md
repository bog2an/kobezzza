# ДЗ к лекции Архитектура#1

## Создать классы для работы с локальным хранилищем

Должно быть два класса: класс для работы с localStorage и класс для работы с Cookies.
Оба должны реализовывать одинаковый CRUD API. Подумайте над повторным использованием кода.

```js
const ls = new LocalStorage();

ls.set('a', 42);
console.log(ls.get('a')) // 42;

const cookie = new CookieStorage();

cookie.set('a', 42);
console.log(cookie.get('a')) // 42;
```
