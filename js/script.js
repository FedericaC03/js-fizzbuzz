// 1. STAMPO I NUMERI DA 1 A 100
// 2. PER I MULTIPLI DI 3 STAMPO "FIZZ" AL POSTO DEL NUMERO
// 3. PER I MULTIPLI DI 5 STAMPO "BUZZ" AL POSTO DEL NUMERO
// 4. PER I NUMERI MULTIPLI DI 3 E DI 5 STAMPO "FIZZBUZZ"

 for (var num = 1; num <= 100; num++) {
    console.log(num);
  if (num % 3 === 0 && num % 5 === 0 ) {
    console.log("fizz");
  } else if (num % 3 === 0) {
    console.log("buzz");
  } else if (num % 5 === 0) {
    console.log("fizzbuzz");
  }
}
