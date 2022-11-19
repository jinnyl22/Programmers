// 문자열 뒤집기
function solution(my_string) {
  let str = [];
  for (let i = 1; i <= my_string.length; i++) {
    str.push(my_string.substring(i - 1, i));
  }
  let answer = str.reverse();
  return answer.join("");
}

// console.log(solution("jaron"));
