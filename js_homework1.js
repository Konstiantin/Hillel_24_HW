console.log ('number' + 3 + 3);  // работает конкатенация переводя всё в строку   = number33 

console.log (null + 3); // null = false = 0, 0 + 3 результат будет = 3

console.log (5 && "qwerty"); // Поскольку первый операнд (не булевый) имеет ложное значение,
// то следующее выражение никогда не будет вычислено и результат вывода будет = "qwerty"

console.log (+'40' + +'2' + "hillel"); // тут gриводим стринг 40 и 2 в числа и получаем 40+2=42 потом конкатенация и результат = 42hillel

console.log ('10' - 5 === 6); // приводим `10' в число и получаем 10 - 5 = 5, 5 не равно 6 - разультат = false

console.log (true + false); // true = 1, false = 0 - получаем  1+0 = 1 и результат будет = 1

console.log ('4px' - 3); // такие выражения дают типовой NaN

console.log ('4' - 3);// '4' преобразовывается в числовое значенеие и вычитается 3  результат = 1

console.log ('6' + 3 ** 0); // 3 в нулевой степени = 1 и потом конкатенаци строк 6 + 1 результат = 61 

console.log (12 / '6'); // выполняется математическая операция 12/6 = 2

console.log ('10' + (5 === 6)); // '10' - преобразовываем в число, а (5===6) равно false - потом конкатениция результат = 10false

console.log (null == ''); // null == false так же как и '' == false поэтому  получаем false + false результат = false

console.log (3 ** (9 / 3)); // выполняем операцию в скобках = 3, потом 3 возводим в 3 степень и результат = 27

console.log (!!'false' === !!'true'); // выражение !!'false' и !!'true' возвращает true так как строки не пустые,
// получается выражение true == true значит результат будет = true

console.log (0 || '0' && 1); // (0 || '0') = true, 1 = true. (true && true) = true = 1  результат выражения будет = 1

console.log ((+null === false) < 1); // +null равен false так же как и false значит значение в скобках будет равно true и равно 1, 1<1= false

console.log (true); // false && true = false, a false || true = true  результат будет =  true -  пояснение ->
//|| – возвращает true, если хотя бы один из операндов есть true , a && - возвращает true, если оба операнда есть true, иначе возвращает false

console.log (false); // (false || true) = true, a false && true = false результат будет = false

console.log (+null === false) < 1 ** 5; // null в js это тип, поэтому сравнивая его с чем-то другим вы всегда получим false, отсюда получаем (+null == false) = false
// так как 1**5 = 1, а false = 0  получаем выражение: 0 < 1 = true
