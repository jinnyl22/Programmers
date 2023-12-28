function solution(a, b) {
    const num1 = +(String(a) + String(b));
    const num2 = 2 * a * b;
   const result = num1 - num2;
    if(num2 === num1) return num1;
   return result < 0 ? num2 : num1;
    
}