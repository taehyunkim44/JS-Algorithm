// 크기가 작은 부분 문자열

function solution(t, p) {
  let result = 0;
  let num;

  for (let i = 0; i <= t.length - p.length; i++) {
    num = t.substr(i, p.length);

    if (Number(num) <= Number(p)) result++;
  }
  return result;
}
