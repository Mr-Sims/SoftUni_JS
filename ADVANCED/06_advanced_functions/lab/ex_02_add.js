
// ver 1
// function solution(input) {
//     const num = input

//  function add(input) {
//     return num + input
//  }
//  return add
// }
// ver 2
// function solution(input) {
//     const num = input

//  return function (input) {
//      return num + input
//  }
// }

//ver 3
function solution(input) {
    const num = input

    return (input) => {
        return num + input
    }
}



let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
