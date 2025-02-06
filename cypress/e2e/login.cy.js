/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cypress/e2e/login.cy.js":
/*!*********************************!*\
  !*** ./cypress/e2e/login.cy.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


it('Верный пароль и логин', function () {
  cy.visit('https://www.yota.ru/', {
    timeout: 1200000
  }); // Заходим на сайт
  cy.get('.geolocation > yota-region-notification > .region-notification > .region-notification__box > .region-notification__actions > .y-button').click(); // Подтверждаем геолокацию
  cy.get('.y-highlight > .personal-cabinet > .y-menu-trigger > .personal-cabinet__label').click(); // Нажимаем кнопку войти
  cy.get('[href="https://lk.yota.ru/"]').click(); 
  cy.get('#username').type('USER_LOGIN'); // Вводим логин
  cy.get('#password').type('USER_PASSWORD'); // Вводим пароль
  cy.get('#kc-login').click(); // Нажимаем кнопку войти
});
it('Неверный пароль и верный логин', function () {
  cy.visit('https://www.yota.ru/', {
    timeout: 1200000
  }); // Заходим на сайт
  cy.get('.geolocation > yota-region-notification > .region-notification > .region-notification__box > .region-notification__actions > .y-button').click(); // Подтверждаем геолокацию
  cy.get('.y-highlight > .personal-cabinet > .y-menu-trigger > .personal-cabinet__label').click(); // Нажимаем кнопку войти
  cy.get('[href="https://lk.yota.ru/"]').click(); // Выбираем категорию модем/роутер
  cy.get('#username').type('USER_LOGIN'); // Вводим верный логин
  cy.get('#password').type('USER_PASSWORD'); // Вводим неверный пароль
  cy.get('#kc-login').click(); // Нажимаем кнопку войти
  cy.get('#alert-show').contains('Неверное имя пользователя или пароль Убедитесь, что данные введены правильно'); // Убеждаемся в том, что выходит данное сообщение
});
it('Верный пароль и неверный логин', function () {
  cy.visit('https://www.yota.ru/', {
    timeout: 1200000
  }); // Заходим на сайт
  cy.get('.geolocation > yota-region-notification > .region-notification > .region-notification__box > .region-notification__actions > .y-button').click(); // Подтверждаем геолокацию
  cy.get('.y-highlight > .personal-cabinet > .y-menu-trigger > .personal-cabinet__label').click(); // Нажимаем кнопку войти
  cy.get('[href="https://lk.yota.ru/"]').click(); // Выбираем категорию модем/роутер
  cy.get('#username').type('USER_LOGIN'); // Вводим неверный логин
  cy.get('#password').type('USER_PASSWORD'); // Вводим верный пароль
  cy.get('#kc-login').click(); // Нажимаем кнопку войти
  cy.get('#alert-show').contains('Неверное имя пользователя или пароль Убедитесь, что данные введены правильно'); // Убеждаемся в том, что выходит данное сообщение
});
it('Валидация на наличие @', function () {
  cy.visit('https://www.yota.ru/', {
    timeout: 1200000
  }); // Заходим на сайт
  cy.get('.geolocation > yota-region-notification > .region-notification > .region-notification__box > .region-notification__actions > .y-button').click(); // Подтверждаем геолокацию
  cy.get('.y-highlight > .personal-cabinet > .y-menu-trigger > .personal-cabinet__label').click(); // Нажимаем кнопку войти
  cy.get('[href="https://lk.yota.ru/"]').click(); // Выбираем категорию модем/роутер
  cy.get('#username').type('USER_LOGIN'); // Вводим верный логин
  cy.get('#password').type('USER_PASSWORD'); // Вводим верный пароль
  cy.get('#kc-login').click(); // Нажимаем кнопку войти
  cy.get('#alert-show').contains('Неверное имя пользователя или пароль Убедитесь, что данные введены правильно'); // Убеждаемся в том, что выходит данное сообщение
});
it('Проверка цвета кнопки', function () {
  cy.visit('https://www.yota.ru/', {
    timeout: 1200000
  }); // Заходим на сайт
  cy.get('.geolocation > yota-region-notification > .region-notification > .region-notification__box > .region-notification__actions > .y-button').click(); // Подтверждаем геолокацию
  cy.get('.y-highlight > .personal-cabinet > .y-menu-trigger > .personal-cabinet__label').click(); // Нажимаем кнопку войти
  cy.get('[href="https://lk.yota.ru/"]').click(); // Выбираем категорию модем/роутер
  cy.get('#username').type('USER_LOGIN'); // Вводим верный логин
  cy.get('#password').type('USER_PASSWORD');  // Вводим верный пароль
  cy.get('#kc-login').should('have.css', 'color', 'rgb(255, 255, 255)'); // Проверяем совпадение цвета кнопки
  cy.get('#kc-login').click(); 
});

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./cypress/e2e/login.cy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\юля\Desktop\new_cypress-main\cypress\e2e\login.cy.js */"./cypress/e2e/login.cy.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3lwcmVzcy9lMmUvbG9naW4uY3kuanMiXSwibmFtZXMiOlsiaXQiLCJjeSIsInZpc2l0IiwidGltZW91dCIsImdldCIsImNsaWNrIiwidHlwZSIsImNvbnRhaW5zIiwic2hvdWxkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqRkFBLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxZQUFZO0VBQy9CQyxFQUFFLENBQUNDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRTtJQUFFQyxPQUFPLEVBQUU7RUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3hERixFQUFFLENBQUNHLEdBQUcsQ0FBQyx3SUFBd0ksQ0FBQyxDQUFDQyxLQUFLLEVBQUU7RUFDeEpKLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLCtFQUErRSxDQUFDLENBQUNDLEtBQUss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VyxDQUFDLENBQUNDLEtBQUssRUFBRTtFQUMzQkosRUFBRSxDQUFDRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUNHLFFBQVEsQ0FBQyw4RUFBOEUsQ0FBQztBQUNsSCxDQUFDLENBQUM7QUFHRlAsRUFBRSxDQUFDLHVCQUF1QixFQUFFLFlBQVk7RUFDcENDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLHNCQUFzQixFQUFFO0lBQUVDLE9BQU8sRUFBRTtFQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDeERGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHdJQUF3SSxDQUFDLENBQUNDLEtBQUssRUFBRTtFQUN4SkosRUFBRSxDQUFDRyxHQUFHLENBQUMsK0VBQStFLENBQUMsQ0FBQ0MsS0FBSyxFQUFFO0VBQy9GSixFQUFFLENBQUNHLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDQyxLQUFLLEVBQUU7RUFDOUNKLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDRSxJQUFJLENBQUMsNEJBQTRCLENBQUM7RUFDdERMLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDO0VBQ3BDTCxFQUFFLENBQUNHLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUM7RUFDckVQLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxLQUFLLEVBQUU7QUFDL0IsQ0FBQyxDQUFDLEMiLCJmaWxlIjoibG9naW4uY3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcclxuaXQoJ9CS0LXRgNC90YvQuSDQv9Cw0YDQvtC70Ywg0Lgg0LvQvtCz0LjQvScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgY3kudmlzaXQoJ2h0dHBzOi8vd3d3LnlvdGEucnUvJywgeyB0aW1lb3V0OiAxMjAwMDAwIH0pOyAvLyDQl9Cw0YXQvtC00LjQvCDQvdCwINGB0LDQudGCXHJcbiAgICAgICAgIGN5LmdldCgnLmdlb2xvY2F0aW9uID4geW90YS1yZWdpb24tbm90aWZpY2F0aW9uID4gLnJlZ2lvbi1ub3RpZmljYXRpb24gPiAucmVnaW9uLW5vdGlmaWNhdGlvbl9fYm94ID4gLnJlZ2lvbi1ub3RpZmljYXRpb25fX2FjdGlvbnMgPiAueS1idXR0b24nKS5jbGljaygpO1xyXG4gICAgICAgICBjeS5nZXQoJy55LWhpZ2hsaWdodCA+IC5wZXJzb25hbC1jYWJpbmV0ID4gLnktbWVudS10cmlnZ2VyID4gLnBlcnNvbmFsLWNhYmluZXRfX2xhYmVsJykuY2xpY2soKTtcclxuICAgICAgICAgY3kuZ2V0KCdbaHJlZj1cImh0dHBzOi8vbGsueW90YS5ydS9cIl0nKS5jbGljaygpO1xyXG4gICAgICAgICBjeS5nZXQoJyN1c2VybmFtZScpLnR5cGUoJ3l1bGlhX2NoZXJub3ZhMjAwMUBtYWlsLnJ1Jyk7XHJcbiAgICAgICAgIGN5LmdldCgnI3Bhc3N3b3JkJykudHlwZSgnQXU4OTBqdWwnKTtcclxuICAgICAgICAgY3kuZ2V0KCcja2MtbG9naW4nKS5jbGljaygpO1xyXG59KVxyXG5cclxuaXQoJ9Cd0LXQstC10YDQvdGL0Lkg0L/QsNGA0L7Qu9GMINC4INCy0LXRgNC90YvQuSDQu9C+0LPQuNC9JywgZnVuY3Rpb24gKCkge1xyXG4gICAgY3kudmlzaXQoJ2h0dHBzOi8vd3d3LnlvdGEucnUvJywgeyB0aW1lb3V0OiAxMjAwMDAwIH0pOyAvLyDQl9Cw0YXQvtC00LjQvCDQvdCwINGB0LDQudGCXHJcbiAgICBjeS5nZXQoJy5nZW9sb2NhdGlvbiA+IHlvdGEtcmVnaW9uLW5vdGlmaWNhdGlvbiA+IC5yZWdpb24tbm90aWZpY2F0aW9uID4gLnJlZ2lvbi1ub3RpZmljYXRpb25fX2JveCA+IC5yZWdpb24tbm90aWZpY2F0aW9uX19hY3Rpb25zID4gLnktYnV0dG9uJykuY2xpY2soKTtcclxuICAgIGN5LmdldCgnLnktaGlnaGxpZ2h0ID4gLnBlcnNvbmFsLWNhYmluZXQgPiAueS1tZW51LXRyaWdnZXIgPiAucGVyc29uYWwtY2FiaW5ldF9fbGFiZWwnKS5jbGljaygpO1xyXG4gICAgY3kuZ2V0KCdbaHJlZj1cImh0dHBzOi8vbGsueW90YS5ydS9cIl0nKS5jbGljaygpO1xyXG4gICAgY3kuZ2V0KCcjdXNlcm5hbWUnKS50eXBlKCd5dWxpYV9jaGVybm92YTIwMDFAbWFpbC5ydScpO1xyXG4gICAgY3kuZ2V0KCcjcGFzc3dvcmQnKS50eXBlKCdqdWwxMjMnKTtcclxuICAgIGN5LmdldCgnI2tjLWxvZ2luJykuY2xpY2soKTtcclxuICAgIGN5LmdldCgnI2FsZXJ0LXNob3cnKS5jb250YWlucygn0J3QtdCy0LXRgNC90L7QtSDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC40LvQuCDQv9Cw0YDQvtC70Ywg0KPQsdC10LTQuNGC0LXRgdGMLCDRh9GC0L4g0LTQsNC90L3Ri9C1INCy0LLQtdC00LXQvdGLINC/0YDQsNCy0LjQu9GM0L3QvicpO1xyXG59KVxyXG5cclxuaXQoJ9CS0LXRgNC90YvQuSDQv9Cw0YDQvtC70Ywg0Lgg0L3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9JywgZnVuY3Rpb24gKCkge1xyXG4gICAgY3kudmlzaXQoJ2h0dHBzOi8vd3d3LnlvdGEucnUvJywgeyB0aW1lb3V0OiAxMjAwMDAwIH0pOyAvLyDQl9Cw0YXQvtC00LjQvCDQvdCwINGB0LDQudGCXHJcbiAgICBjeS5nZXQoJy5nZW9sb2NhdGlvbiA+IHlvdGEtcmVnaW9uLW5vdGlmaWNhdGlvbiA+IC5yZWdpb24tbm90aWZpY2F0aW9uID4gLnJlZ2lvbi1ub3RpZmljYXRpb25fX2JveCA+IC5yZWdpb24tbm90aWZpY2F0aW9uX19hY3Rpb25zID4gLnktYnV0dG9uJykuY2xpY2soKTtcclxuICAgIGN5LmdldCgnLnktaGlnaGxpZ2h0ID4gLnBlcnNvbmFsLWNhYmluZXQgPiAueS1tZW51LXRyaWdnZXIgPiAucGVyc29uYWwtY2FiaW5ldF9fbGFiZWwnKS5jbGljaygpO1xyXG4gICAgY3kuZ2V0KCdbaHJlZj1cImh0dHBzOi8vbGsueW90YS5ydS9cIl0nKS5jbGljaygpO1xyXG4gICAgY3kuZ2V0KCcjdXNlcm5hbWUnKS50eXBlKCd5dWxpYV9jaGVybm92YUBtYWlsLnJ1Jyk7XHJcbiAgICBjeS5nZXQoJyNwYXNzd29yZCcpLnR5cGUoJ0F1ODkwanVsJyk7XHJcbiAgICBjeS5nZXQoJyNrYy1sb2dpbicpLmNsaWNrKCk7XHJcbiAgICBjeS5nZXQoJyNhbGVydC1zaG93JykuY29udGFpbnMoJ9Cd0LXQstC10YDQvdC+0LUg0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuNC70Lgg0L/QsNGA0L7Qu9GMINCj0LHQtdC00LjRgtC10YHRjCwg0YfRgtC+INC00LDQvdC90YvQtSDQstCy0LXQtNC10L3RiyDQv9GA0LDQstC40LvRjNC90L4nKTtcclxufSlcclxuXHJcbml0KCfQktCw0LvQuNC00LDRhtC40Y8g0L3QsCDQvdCw0LvQuNGH0LjQtSBAJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY3kudmlzaXQoJ2h0dHBzOi8vd3d3LnlvdGEucnUvJywgeyB0aW1lb3V0OiAxMjAwMDAwIH0pOyAvLyDQl9Cw0YXQvtC00LjQvCDQvdCwINGB0LDQudGCXHJcbiAgICBjeS5nZXQoJy5nZW9sb2NhdGlvbiA+IHlvdGEtcmVnaW9uLW5vdGlmaWNhdGlvbiA+IC5yZWdpb24tbm90aWZpY2F0aW9uID4gLnJlZ2lvbi1ub3RpZmljYXRpb25fX2JveCA+IC5yZWdpb24tbm90aWZpY2F0aW9uX19hY3Rpb25zID4gLnktYnV0dG9uJykuY2xpY2soKTtcclxuICAgIGN5LmdldCgnLnktaGlnaGxpZ2h0ID4gLnBlcnNvbmFsLWNhYmluZXQgPiAueS1tZW51LXRyaWdnZXIgPiAucGVyc29uYWwtY2FiaW5ldF9fbGFiZWwnKS5jbGljaygpO1xyXG4gICAgY3kuZ2V0KCdbaHJlZj1cImh0dHBzOi8vbGsueW90YS5ydS9cIl0nKS5jbGljaygpO1xyXG4gICAgY3kuZ2V0KCcjdXNlcm5hbWUnKS50eXBlKCd5dWxpYV9jaGVybm92YTIwMDFtYWlsLnJ1Jyk7XHJcbiAgICBjeS5nZXQoJyNwYXNzd29yZCcpLnR5cGUoJ0F1ODkwanVsJyk7XHJcbiAgICBjeS5nZXQoJyNrYy1sb2dpbicpLmNsaWNrKCk7XHJcbiAgICBjeS5nZXQoJyNhbGVydC1zaG93JykuY29udGFpbnMoJ9Cd0LXQstC10YDQvdC+0LUg0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuNC70Lgg0L/QsNGA0L7Qu9GMINCj0LHQtdC00LjRgtC10YHRjCwg0YfRgtC+INC00LDQvdC90YvQtSDQstCy0LXQtNC10L3RiyDQv9GA0LDQstC40LvRjNC90L4nKTtcclxufSlcclxuXHJcblxyXG5pdCgn0J/RgNC+0LLQtdGA0LrQsCDRhtCy0LXRgtCwINC60L3QvtC/0LrQuCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGN5LnZpc2l0KCdodHRwczovL3d3dy55b3RhLnJ1LycsIHsgdGltZW91dDogMTIwMDAwMCB9KTsgLy8g0JfQsNGF0L7QtNC40Lwg0L3QsCDRgdCw0LnRglxyXG4gICAgY3kuZ2V0KCcuZ2VvbG9jYXRpb24gPiB5b3RhLXJlZ2lvbi1ub3RpZmljYXRpb24gPiAucmVnaW9uLW5vdGlmaWNhdGlvbiA+IC5yZWdpb24tbm90aWZpY2F0aW9uX19ib3ggPiAucmVnaW9uLW5vdGlmaWNhdGlvbl9fYWN0aW9ucyA+IC55LWJ1dHRvbicpLmNsaWNrKCk7XHJcbiAgICBjeS5nZXQoJy55LWhpZ2hsaWdodCA+IC5wZXJzb25hbC1jYWJpbmV0ID4gLnktbWVudS10cmlnZ2VyID4gLnBlcnNvbmFsLWNhYmluZXRfX2xhYmVsJykuY2xpY2soKTtcclxuICAgIGN5LmdldCgnW2hyZWY9XCJodHRwczovL2xrLnlvdGEucnUvXCJdJykuY2xpY2soKTtcclxuICAgIGN5LmdldCgnI3VzZXJuYW1lJykudHlwZSgneXVsaWFfY2hlcm5vdmEyMDAxQG1haWwucnUnKTtcclxuICAgIGN5LmdldCgnI3Bhc3N3b3JkJykudHlwZSgnQXU4OTBqdWwnKTtcclxuICAgIGN5LmdldCgnI2tjLWxvZ2luJykuc2hvdWxkKCdoYXZlLmNzcycsICdjb2xvcicsICdyZ2IoMjU1LCAyNTUsIDI1NSknKTtcclxuICAgIGN5LmdldCgnI2tjLWxvZ2luJykuY2xpY2soKTtcclxufSkiXSwic291cmNlUm9vdCI6IiJ9