// ver1
// function listProcessor(input) {
//     let result = [];

//     function add(value) {
//         result.push(value)
//     }
//     function remove(value) {
//         result = result.filter(function(x){return x != value})
//     }
//     function print() {
//         console.log(result.join(','))
//     }

//     processor = {
//         add,
//         remove,
//         print
//     }
    
//     for (let el of input) {
//         const [command, value] = el.split(' ')
//         processor[command](value)     
//     }
// }

// ver 2
function listProcessor(input) {
    let result = [];
    processor = {
        add: (value) => {result.push(value)},
        remove: (value) => (result = result.filter((x) => x != value)),
        print: () => {console.log(result.join(','))}
    }
    
    for (let el of input) {
        const [command, value] = el.split(' ')
        processor[command](value)     
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
// console.log(listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']))