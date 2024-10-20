/*
Опис ДЗ: 
Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). 
Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.

Наприклад так:

obj.getInfo(); // Правильна інформація про об'єкт
obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
*/

const object = {
  name: 'Mike',
  status: 'Student',
  year_old: 20,
  getInfo: function (obj) {
      for (let i in obj) {
        if (typeof obj[i] !== 'function') {
            console.log (i + ': ' +  obj[i]);
          } 
      }
    }
};

object.getInfo(object); 
object.kourse = 'QA';
object.weight = '180';
object.getInfo(object); 