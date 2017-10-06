/**
 * Created by ahmermalik on 9/30/17.
 */


function isPrime(n){                    //to find out whether a number is divisible by 2 or not.
    var divisor = 2;

    while (n > divisor){
        if(n % divisor == 0){
            return false;
        }
        else
            divisor++;
    }
    return true;
}


console.log(isPrime(137));

//
//
//
// function primeFactors(n){
//     var factors = [],
//         divisor = 2;                //establish the empty array and your divisor
//
//     while(n>2){                     //initialize a while loop that takes 'n' aka whatever number you want to know the prime factor of
//         if(n % divisor == 0){       // if 'n' divided into 2 is not a whole number, it goes to else.
//             factors.push(divisor);
//             n= n/ divisor;             //if it has a remainder of 0, push it into the empty array.
//         }
//         else{
//             divisor++;              //it goes up in number..after being initizlied at 2.
//         }
//     }
//     return factors;
// }
// console.log(primeFactors(69))


// function fibonacci(n){
//     var fibo = [0, 1];
//
//     if (n <= 2) return 1;
//
//     for (var i = 2; i <=n; i++ ){
//         fibo[i] = fibo[i-1]+fibo[i-2];
//     }
//
//     return fibo[n];
// }
//
// console.log(fibonacci(12))