// 프로그래머스 명예의 전당

function solution(k, score) {
  let list = [];
  let result = [];

  score.forEach((x) => {
    list.push(x);
    list.sort((a, b) => b - a);

    if (list.length >= k) {
      result.push(list[k - 1]);
    } else {
      result.push(list[list.length - 1]);
    }
  });

  return result;
}
