// 배열의 평균 값
// let numbers = [1, 2, 3];
function solution(numbers) {
  console.log(numbers);
  let answer = numbers.reduce((acc, cur) => acc + cur, 0);
  return answer / numbers.length;
}

// console.log(solution(numbers));
