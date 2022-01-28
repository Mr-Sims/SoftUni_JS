function createSortedList() {
    return {
        list: [],
        size: 0,

        add(value) {
            this.list.push(value);
            this.list.sort((a, b) => a - b);
            this.size++;
        },

        remove(index) {
            let length = this.list.length 
            if (index < length && index >= 0) {
                this.list.splice(index, 1);
                this.list.sort((a, b) => a - b);
                this.size--;
            } else {
                throw new Error('index out of range!');
            }
        },

        get(index) {
            let length = this.list.length 
            if (index < length && index >= 0) {
                return this.list[index];
            } else {
                throw new Error('Index out of range!');
            }
        }
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)


// var myList = result();
// expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

// // Generate random list of 20 numbers
// var expectedArray = [];
// for (let i = 0; i < 20; i++) {
//     expectedArray.push(Math.floor(Math.random() * 200) - 100);
// }
// // Add to collection
// for (let i = 0; i < expectedArray.length; i++) {
//     myList.add(expectedArray[i]);
// }
// expect(myList.size).to.equal(20, "Elements weren't added");
// // Sort array
// expectedArray.sort((a, b) => a - b);
// // Compare with collection
// for (let i = 0; i < expectedArray.length; i++) {
//     expect(myList.get(i)).to.equal(expectedArray[i], "Array wasn't sorted");
// }