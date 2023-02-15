// 프로그래머스 과일 장수

function solution(k, m, score) {
  score.sort((a, b) => b - a);

  let result = 0;

  let minIdx = m - 1;

  for (let i = 0; i < Math.floor(score.length / m); i++) {
    result += score[minIdx] * m;

    minIdx += m;
  }

  return result;
}
