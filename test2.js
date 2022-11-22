// n의 배수 고르기
function solution(n, numlist) {
  const answer = [];
  numlist.map((el) => {
    if (el % n == 0) {
      answer.push(el);
    }
  });
  return answer;
}

// console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
