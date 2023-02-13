// x 와 y,p 라는 세 개의 숫자에 대해 (x^y) % p를 계산하라

// 큰 지수를 다룰 수 없는 경우
function modularExponentiation(base, exponent, modulus) {
  return Math.pow(base, exponent) % modulus;
}

// 큰 지수까지 포함한 경우
function modularExponentiation(base, exponent, modulus) {
  if (modulus == 1) return 0;

  let value = 1;

  for (let i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }
  return value;
}

// 시간 복잡도 : O(n)
