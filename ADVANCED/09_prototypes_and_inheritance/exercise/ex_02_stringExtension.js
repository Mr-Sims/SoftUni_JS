(function solve() {
    String.prototype.ensureStart = function (value) {
        if (!this.startsWith(value)) {
            return `${value}${this}`
        } else {
            return `${this}`
        }
    };
    String.prototype.ensureEnd = function(value) {
        if (!this.endsWith(value)) {
            return `${this}${value}`
        } else {
            return `${this}`
        }
    };
    String.prototype.isEmpty = function() {
        if (this == '') {
            return true
        } else {
            return false
        }
    }
    String.prototype.truncate = function(value) {
        if (this.length <= value) {
            return `${this}`

        } else {

            let spaces = 0
            for (let i = 0; i < this.length; i++) {

                if (i+1 == value && spaces > 0) {
                    let arr = this.split(' ')
                    let result = []
                    for (let i = 0; i < spaces; i++) {
                        result.push(arr[i])
                    }
                    return `${result.join(' ')}...`
                    
                } else if (i+1 == value && spaces <= 0) {
                    let end = value-3
                    let string = ''
                    for (let i = 0; i < end; i++) {
                        string += this[i]
                    }
                    return `${string}...`
                } else if (value < 4) {
                    let res = ''
                    for (let i = 0; i < value; i++) {
                        res += '.'
                    }
                    return res
                }

                if (this[i] == ' ') {
                    spaces++
                }
            }
        }
    }
    String.prototype.format = function(string, ...params) {
        console.log(string)

    };
})()



let str = 'my string';

// // test ensureStart()
// str = str.ensureStart('my');
// console.log(str)
// str = str.ensureStart('hello ');
// console.log(str)


// // test ensureEnd()
// str = str.ensureEnd('string')
// console.log(str)
// str = str.ensureEnd('pudes')
// console.log(str)


// // test isEmpty()
// console.log(str.isEmpty())
// str = ''
// console.log(str.isEmpty())

// test truncate()
// str = str.truncate(16);
// console.log(str)

// str = str.truncate(14);
// console.log(str)

// str = str.truncate(8);
// console.log(str)

// str = str.truncate(4);
// console.log(str)

// str = str.truncate(2);
// console.log(str)


// // test format()
str = String.format('The {0} {1} fox', 'quick', 'brown');
str = String.format('jumps {0} {1}', 'dog');
