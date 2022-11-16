// 아이스 아메리카노
function solution(money) {
  let answer = [];
  let coffee = parseInt(money / 5500);
  let coin = money % 5500;
  answer.push(coffee, coin);
  return answer;
}

// console.log(solution(20000));
