// 최댓값 만들기
function solution(numbers) {
  const num = numbers
    .sort((a, b) => {
      return a - b;
    })
    .reverse();
  return num[0] * num[1];
}

// console.log(solution([0, 31, 24, 10, 1, 9]));
