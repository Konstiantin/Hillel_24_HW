function pow(x, y) {
  let result = x;
  for (let i = 1; i < y; i++) {
    result *= x;
  }
  return console.log(result);
}
pow(3,2);
let x = prompt('Введите x: ', '');
let y = prompt('Введите y: ', '');
pow(3,2);
pow();
