/*Опис ДЗ: Перевірка теорії ймовірності.
Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
Порахувати кількість парних та непарних серед них.
Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
Приклад функції checkProbabilityTheory(count). 
Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

Умови виконання ДЗ

Функція виводить інформацію
Кількість згенерованих чисел: кількість чисел
Парних чисел: кількість парних чисел
Не парних чисел: кількість не парних чисел
Відсоток парних до не парних:
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
*/

function checkProbabilityTheory(count) {
    let evenNumberCount = 0;
    let oddNumberCount = 0;

    for (let i = 0; i < count; i++) {
        let random = Math.ceil(Math.random() * (1000 - 100));
         // console.log (random) ;
        if (random % 2 === 0) {
            evenNumberCount++;
               // console.log(evenNumberCount);
        } else {
            oddNumberCount++;
                //console.log(evenNumberCount);
        }
    }

    let evenPercent = (evenNumberCount / count) * 100;
    let oddPercent = (oddNumberCount / count) * 100;
    let oddVsEvenPersent = (evenNumberCount*100) / oddNumberCount;
    let oddVsEven = (oddNumberCount / evenNumberCount);

    if (Math.abs(evenPercent - 50) < 5 && Math.abs(oddPercent - 50) < 5) {
        console.log("Співвідношення близьке до 50/50");
    } else {
        console.log("Співвідношення не близьке до 50/50");
    }

        console.log(`Згенеровано ${count} випадкових чисел`);
        console.log(`Кількість парних чисел: ${evenNumberCount}`);
        console.log(`Кількість непарних чисел: ${oddNumberCount}`);
        console.log(`Відсоток парних: ${evenPercent.toFixed()}%`);
        console.log(`Відсоток непарних: ${oddPercent.toFixed()}%`);
        console.log(`Відношення парних до непарних у вiдсотках: ${oddVsEvenPersent.toFixed()}%`);
        console.log(`Відношення парних до непарних: 1/${oddVsEven.toFixed(2)}`)
}

checkProbabilityTheory(100);
