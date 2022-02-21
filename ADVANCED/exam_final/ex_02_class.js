class LibraryCollection {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error('Not enough space in the collection.')
        }
        let book = {
            bookName,
            bookAuthor,
            payed: false,
        }
        this.books.push(book)
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        let book = this.books.find(obj => (obj.bookName === bookName));
        if (book == undefined) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (book.payed == true) {
            throw new Error(`${bookName} has already been paid.`)
        }
        this.books.filter(x => x.bookName == bookName).map(x => x.payed = true)
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        let book = this.books.find(obj => (obj.bookName === bookName));
        if (book == undefined) {
            throw new Error(`The book, you're looking for, is not found.`)
        }
        if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        let index = this.books.indexOf(book)
        this.books.splice(index, 1)
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        let result = []

        if (bookAuthor == undefined) {
            let emptySlots = this.capacity - this.books.length
            result.push(`The book collection has ${emptySlots} empty spots left.`)
            let sorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
            for (let el of sorted) {
                result.push(this.resultFix(el))
            }
        }
        else {
            let finds = this.books.filter(obj => (obj.bookAuthor === bookAuthor));
            if (finds.length == 0) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            for (let el of finds) {
                result.push(this.resultFix(el))
            }
        }
        return result.join('\n')
    }

    resultFix(el) {
        let status;
        if (el.payed == true) {
            status = 'Has Paid'
        }
        else if (el.payed == false) {
            status = 'Not Paid'
        }
        return `${el.bookName} == ${el.bookAuthor} - ${status}.`
    }
}

// // test case 1
// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

/*
The In Search of Lost Time, with an author Marcel Proust, collect.
The Don Quixote, with an author Miguel de Cervantes, collect.
Not enough space in the collection.
*/


// // test case 2
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));
/*
In Search of Lost Time has been successfully paid.
Don Quixote is not in the collection.
 */

// // test case 3
// const library = new LibraryCollection(52)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

/*
Don Quixote remove from the collection.
In Search of Lost Time need to be paid before removing from the collection.
*/

// // test case 4
// const library = new LibraryCollection(222)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));
/*
The Don Quixote, with an author Miguel de Cervantes, collect.
Don Quixote == Miguel de Cervantes - Not Paid.
*/

// // test case 5
// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());
/*
The book collection has 2 empty spots left.
Don Quixote == Miguel de Cervantes - Has Paid.
In Search of Lost Time == Marcel Proust - Not Paid.
Ulysses == James Joyce - Not Paid.
*/
