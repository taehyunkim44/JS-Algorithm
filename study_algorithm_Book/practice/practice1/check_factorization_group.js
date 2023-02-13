// 소인수가 2, 3, 5 뿐인 숫자 찾기

function maxDivide(number, divisor) {
  while (number % divisor == 0) {
    number /= divisor;
  }
  return number;
}

// 시간 복잡도 O(log divisor(number))

function isTarget(number) {
  number = maxDivide(number, 2);
  number = maxDivide(number, 3);
  number = maxDivide(number, 5);
  return number === 1;
}

// 시간 복잡도 O(log 2(n))

// n개의 타켓 숫자 찾을 경우
function arrayNTargetNumbers(n) {
  let counter = 0,
    currentNumber = 1,
    targetNumbers = [];

  while (counter != n) {
    if (isTarget(currentNumber)) {
      counter++;
      targetNumbers.push(currentNumber);
    }
    currentNumber++;
  }
  return uglyNumbers;
}

// 시간 복잡도 O(n(log 2(n)))
