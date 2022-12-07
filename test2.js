// 특정 문자 제거하기
function solution(my_string, letter) {
  const str = my_string.split("");
  const s = [];
  str.map((el) => {
    if (el !== letter) {
      s.push(el);
    }
  });
  return s.join("");
}

// console.log(solution("BCBdbe", "B"));
