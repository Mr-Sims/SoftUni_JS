const {expect} = require('chai');

const {library} = require('./library');

describe('Testing functionality of object library', () => {
    describe('testing method calcPriceOfBook', () => {
        it('should throw if nameOfBook is not string', () => {
            expect(() => library.calcPriceOfBook(1, 2003)).to.throw("Invalid input");
        });
        it('should throw if year is not integer', () => {
            expect(() => library.calcPriceOfBook('The meditations of Marcus Aurelius', 'string')).to.throw();
        });
        it('should return correctly if year is before 1980', () => {
            expect(library.calcPriceOfBook('Harry Pothead', 1980)).to.equal(`Price of Harry Pothead is 10.00`);
            expect(library.calcPriceOfBook('Harry Pothead', 1979)).to.equal(`Price of Harry Pothead is 10.00`);
        });
        it('should return correctly if year is after 1980', () => {
            expect(library.calcPriceOfBook('Harry Pothead', 1981)).to.equal(`Price of Harry Pothead is 20.00`);
        });
    });
    describe('testing method findBook', () => {
        let books = ["Troy", "Life Style", "Torronto"];
        it('should throw if booksArray is empty', () => {
            expect(() => library.findBook([], 'Harry Pothead')).to.throw("No books currently available");
        });
        it('should return correctly if book is present in array', () => {
            expect(library.findBook(books, 'Troy')).to.equal("We found the book you want.");
        });
        it('should return correctly if book is not present in the array', () => {
            expect(library.findBook(books, 'Harry Pothead')).to.equal("The book you are looking for is not here!");
        });
    });
    describe('testing method arrangeTheBooks', () => {
        it('should throw if input is not an integer', () => {
            expect(() => library.arrangeTheBooks('string')).to.throw("Invalid input");
        });
        it('should throw in input is negative integer', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input");
        });
        it('should return correctly if available space is more or equal to countBooks', () => {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
        });
        it('should return correctly if available space is less than countBooks', () => {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        });
    });
})