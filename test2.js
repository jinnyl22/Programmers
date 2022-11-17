// 머쓱이보다 키 큰 사람
function solution(array, height) {
  let answer = [];
  array.map((el) => {
    if (height < el) {
      answer.push(el);
    }
  });
  return answer.length;
}

// console.log(solution([149, 180, 192, 170], 167));
