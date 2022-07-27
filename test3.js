// get prime
function getPrime(n) {
    var prime = [];
    for (var i = 2; i <= n; i++) {
        if (isPrime(i)) {
            prime.push(i);
        }
    }
    return prime;
}