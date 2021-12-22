class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(value) {
        this.innerLength += value
    };

    decrease(value) {
        if (value <= this.innerLength) {
            this.innerLength -= value
        } else if (value > this.innerLength) {
            this.innerLength = 0
        }
    };

    toString() {
        if (this.innerString.length <= this.innerLength) {
            return `${this.innerString}`
        } else {
            let str = this.innerString
            let endIndex = this.innerLength 
            let res = str.slice(0, endIndex)
            return `${res}`+`...`
        }
    }
}



let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
