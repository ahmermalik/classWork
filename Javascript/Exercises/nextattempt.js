/**
 * Created by ahmermalik on 10/5/17.
 */




// function isPrime(n) {
//     var divisor = 2;
//
//     while (n > divisor){
//         if(n % divisor ==0){
//         return false;
//
//         }
//         else
//             divisor ++;
//
//     }
//     return true;
// }
//
//
// console.log(isPrime(237))


// function primeFactors(n) {
//     var factors = [],
//         divisor = 2;
//
//     while (n>2){
//         if(n % divisor == 0){
//             factors.push(divisor);
//             n= n/divisor;
//         }
//         else{
//             divisor++;
//         }
//     }
//     return factors;
// }
//
// console.log(primeFactors(69));
//// ===========================================================
//
// function fibonacci(n){
//     var fibo = [0,1];
//
//     if (n <= 2) return 1;
//
//     for (var i =2; i <= n; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//
//     }
//     return fibo[n];
// }
//
// console.log('the fibonacci sequence is ' +fibonacci(12));
//
//
//
// function fibonacci(n){
//     if(n<=1)
//         return n;
//     else
//         return fibonacci(n-1) + fibonacci (n-2);
// }
//
// console.log(fibonacci(12));

////===========================================================
////Greatest common divisor

function greatestCommonDivisor(a, b){
    var divisor =2,
        greatestDivisor =1;

if (a < 2 || b < 2 )
    return 1;

while(a >= divisor && b >= divisor){
    if(a %divisor ==0 && b% divisor ==0) {
        greatestDivisor = divisor;
    }
    divisor++;
    }
    return greatestDivisor;
}

console.log(greatestCommonDivisor(12, 34));