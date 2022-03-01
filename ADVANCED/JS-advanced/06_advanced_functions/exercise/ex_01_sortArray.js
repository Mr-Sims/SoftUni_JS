function solve(arr, criteria) {
    const sorters = {
        asc: () => {
            return arr = arr.sort((a, b) => a - b)
        },
        desc: () => {
            return arr = arr.sort((a, b) => b - a)
        }
    }
    return sorters[criteria]()

}

console.log(solve([14, 7, 17, 6, 8], 'asc'));

console.log(solve([14, 7, 17, 6, 8], 'desc'));