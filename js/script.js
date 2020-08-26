// // 1. STAMPO I NUMERI DA 1 A 100
// // 2. PER I MULTIPLI DI 3 STAMPO "FIZZ" AL POSTO DEL NUMERO
// // 3. PER I MULTIPLI DI 5 STAMPO "BUZZ" AL POSTO DEL NUMERO
// // 4. PER I NUMERI MULTIPLI DI 3 E DI 5 STAMPO "FIZZBUZZ"

var lista = document.getElementById('lista');
 for (var num = 1; num <= 100; num++) {

  if (num % 3 === 0 && num % 5 === 0 ) {
    lista.innerHTML += '<li>' + 'FizzBuzz' + '</li>';
  } else if (num % 3 === 0) {
    lista.innerHTML += '<li>' + 'Fizz' + '</li>';
  } else if (num % 5 === 0) {
    lista.innerHTML += '<li>' + 'Buzz' + '</li>';
  } else {
    lista.innerHTML += '<li>' + num + '</li>';
} }
