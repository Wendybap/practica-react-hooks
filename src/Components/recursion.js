// useMemo = memoization
// Practica de Recursividad
// Calculo del factorial de un numero

function factorial(n) {
  if (n === 1) {
    console.log("return 1");
    return 1;
  } else {
    console.log(`return ${n} * factorial (${n} -1)`);
    return n * factorial(n - 1);
  }
}
// console.log(factorial(5));
// console.log("*************");
// console.log(factorial(10));

// Creo una variable de tipo array para guardar los calculos
const memo = [];
function memoFactorial(n) {
  if (n === 1) {
    console.log("return 1");
    return 1;
  } else if (memo[n]) {
    console.log(
      `memofactorial (${n + 1} - 1) ESTA MEMOIZANDO EN MEMO [${n}] (${memo[n]})`
    );
  } else if (!memo[n]) {
    console.log(`memo[${n}] = ${n} * memofactorial(${n} -1)`);
    memo[n] = n * memoFactorial(n - 1);
  }
  return memo[n];
}
// console.log(memoFactorial(5));
// console.log("*************");
// console.log(memoFactorial(10));

// *** Sucesion Fibonacci usando recursividad***
// funcion para calcular un numero X

function fibonacci(n) {
  console.log(`calculo fibonacci ${n}`);
  if (n === 0 || n === 1) {
    console.log(`n es igual a ${n}`);
    return 1;
  } else {
    console.log(`requerimos calcular el fibonacci de ${n - 1} y ${n - 2}`);
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// console.log("*******FIBONACCI*****");
// console.log(fibonacci(5));

// *** Sucesion Fibonacci USANDO memoizacion ***
// funcion para calcular un numero X
// creo la const memeo para guardar calculos

const memoFibo = [];

function memoFibonacci(n) {
  console.group(`calculando fibonacci de ${n}`);
  if (n === 0 || n === 1) {
    console.log(`n es igual a ${n}`);
    return 1;
  } else if (!memoFibo[n]) {
    console.log(`fibonacci de ${n} no esta guardando en memo`);
    console.log(`calculando fibonacci de ${n - 1} y ${n - 2}`);
    memoFibo[n] = memoFibonacci(n - 1) + memoFibonacci(n - 2);
  }
  console.log(`fibonacci de ${n} es: ${memoFibo[n]}`);
  console.groupEnd();
  return memoFibo[n];
}
console.log(memoFibonacci(4));
console.log("***********************");
console.log(memoFibonacci(8));
