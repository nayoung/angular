let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
};
// 익명함수는 arrow function으로 전환가능

// 위의 문장을 한줄로 작성하시오.
let circleArea = (pi, r) => pi * r * r;
// let circleArea = pi => pi * 3 * 3;  // 파라메터 1개면 () 생략가능
let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"
