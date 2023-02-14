// 프로그래머스 콜라 문제

function solution(a, b, n) {
  let count = 0;
  while (n >= a) {
    count += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }
  return count;
}
