// 프로그래머스 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  let rank = 7;
  let max = 0;
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        rank--;
      }
    }
    if (lottos[i] === 0) {
      max--;
    }
  }
  return [
    max === 0 && rank === 7 ? rank - 1 : rank + max,
    rank === 7 || rank === 6 ? 6 : rank,
  ];
}
