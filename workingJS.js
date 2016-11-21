function sumPrimes(num) {
  var primes=[];
  function isPrime(x){
    var prime=true;
    for(var i=2;i<=Math.sqrt(x);i++){
      if(x%i===0){
        prime=false;
      }
    }
    if(prime){
      primes.push(x);
    }
  }
  for(var j=3;j<=num;j++){
    isPrime(j);
  }
  var total = 2;
  for (var y in primes) {
    total += primes[y];
  }
  return total;
};
