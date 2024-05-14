let n = 5;
let cache = Array(n+1).fill(-1);
cache[0] = cache[1] = 1;

function fib(n) {
  if (cache[n] == -1) {
    cache[n] = fib(n-1) + fib(n-2);
  }
  console.log(cache);
  return cache[n];
}

console.log(fib(n));