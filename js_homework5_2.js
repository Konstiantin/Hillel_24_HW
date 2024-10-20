/*Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:
var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
};
"Послуги" можуть додаватися по ходу роботи:

Умови виконання ДЗ
створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price
*/

const services = {
  "Підключення интернету": "500 грн",
  "Вартість роутера": "600 грн",
  "Налаштування роутера": "150 грн",
  
  price: function(summ) {
      let sum = 0;
      for (let service in this) {
          if (typeof this[service] !== 'function') {
              sum += parseInt(this[service]); 
          }
      }
      return `Загальна вартість наданих послуг: ${sum} грн`;
  },

  minPrice: function(minimum) {
      let minService = null;
      let minPrice = Infinity;

      for (let service in this) {
          if (typeof this[service] !== 'function') {
              let price = parseInt(this[service]);
              if (price < minPrice) {
                  minPrice = price;
                  minService = service;
              }
          }
      }
      return `Послуга з мінімальною вартістю: ${minService} - ${minPrice} грн`;
  },

  maxPrice: function(maximum) {
      let maxService = null;
      let maxPrice = -Infinity;

      for (let service in this) {
          if (typeof this[service] !== 'function') {
              let price = parseInt(this[service]);
              if (price > maxPrice) {
                  maxPrice = price;
                  maxService = service;
              }
          }
      }
      return `Послуга з максимальною вартістю: ${maxService} - ${maxPrice} грн`;
  }
};

services['Підняття на поверх монтажника'] = "1500 грн";
services['Вартість кабелю'] = "500 грн";
services['Vlupity montagnika palkoy'] = "20 грн";

console.log(services.price());  
console.log(services.minPrice());
console.log(services.maxPrice());