(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let res = [];
        for (let i = n; i < this.length; i++) {
            res.push(this[i]);
        };
        return res;
    };
    Array.prototype.take = function (n) {
        let res = [];
        for (let i = 0; i < n; i++) {
            res.push(this[i]);
        };
        return res;
    };

    Array.prototype.sum = function () {
        let res = 0
        for (let i = 0; i < this.length; i++) {
            res += this[i];
        }
        return res;
    };
    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})()


let a = [1, 2, 3, 4, 5, 6]

// console.log(a.last())

// console.log(a.skip(3))

// console.log(a.take(3))

// console.log(a.sum())

// console.log(a.average())

