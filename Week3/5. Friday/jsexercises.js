/**
 * Created by ahmermalik on 9/30/17.
 */


function isPrime(n){
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

