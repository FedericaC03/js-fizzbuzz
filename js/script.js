// 1. STAMPO IN CONSOLE NUMERI DA 1 A 100
var lista = document.getElementById('prova');
 for (var num = 1; num <= 100; num++) {
  lista.innerHTML += '<li>' + num + '</li>';
}
// 2. PER I MULTIPLI DI 3 STAMPO "FIZZ" AL POSTO DEL NUMERO
// 3. PER I MULTIPLI DI 5 STAMPO "BUZZ" AL POSTO DEL NUMERO
// 4. PER I NUMERI MULTIPLI DI 3 E DI 5 STAMPO "FIZZBUZZ"
if (num % 3 === 0) {
  lista.replace(Fizz);
} else if (num % 5 === 0) {
  lista.replace("buzz");
} else if (num % 3 === 0 || num % 5 === 0 ) {
  lista.replace("fizzbuzz");
}
