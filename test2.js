// 중복된 숫자 개수
function solution(array, n) {
  let answer = array.filter((el) => el == n);
  return answer.length;
}

// console.log(solution([1, 1, 2, 3, 4, 5], 1));
