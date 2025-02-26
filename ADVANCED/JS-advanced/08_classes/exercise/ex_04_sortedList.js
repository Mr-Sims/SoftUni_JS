class List {
    constructor() {
        this.list = []
        this.size = 0
    }

    add(element) {
        this.list.sort((a, b) => a - b)
        this.list.push(element)
        this.size += 1
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error('Index out of range')
        } else {
            this.list.sort((a, b) => a - b)
            this.list.splice(index, 1)
            this.size -= 1
        }
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error('Index out of range')
        } else {

            this.list.sort((a, b) => a - b)
            return this.list[index]
        }
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)


