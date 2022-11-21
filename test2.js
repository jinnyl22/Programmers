// 자릿수 더하기
function solution(n) {
  let a = n.toString();
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += parseInt(a[i]);
  }
  return answer;
}

// console.log(solution(1234));
