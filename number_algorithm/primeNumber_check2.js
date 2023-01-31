// 소수 체크 (제곱근 방식)
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

// 시간 복잡도 : O(sqrt(n))
