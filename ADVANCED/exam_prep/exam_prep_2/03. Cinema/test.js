const {expect, assert} = require('chai');

const {cinema} = require('./cinema');

describe('testing of cinema object functionality', () => {
    describe('showMovies function testing', () => {
        it('should return correct message if there are no movies', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it ('should return correct joined movies by comma', () => {
            let arr = ['Fight club', 'The Matrix'];
            let expectedResult = 'Fight club, The Matrix';
            expect(cinema.showMovies(arr)).to.equal(expectedResult);
        });
        it('should return correct if array is of 1', () => {
            expect(cinema.showMovies(['Fight culb'])).to.equal('Fight culb');

        })
        
        it('should throw Type error if invalid input is given', () => {
            expect(() => cinema.showMovies(1)).to.throw();
        });
    });



    describe('ticketPrice functionality', () => {
        it('should return correct with correct projection type', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });
        it('should return correct with correct projection type', () => {
            expect(cinema.ticketPrice(['Normal'])).to.equal(7.50);
        });
        it('should return correct with correct projection type', () => {
            expect(cinema.ticketPrice(['Discount'])).to.equal(5.50);
        });
        it('should throw an error if invalid projection type', () => {
            expect(() => cinema.ticketPrice('Pre-Premiere')).to.throw();
        });
        it('should throw an error if invalid projection type', () => {
            expect(() => cinema.ticketPrice(2)).to.throw();
        });
        it('should throw an error if invalid projection type', () => {
            expect(() => cinema.ticketPrice(['ere'])).to.throw();
        });
    });



    describe('swapSeatsInHall functionality', () => {
        it('should swap seats correctly if input is valid', () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.')
        });

        it('should return message if inputs are string', () => {
            expect(cinema.swapSeatsInHall('1', 2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return message if input1 is string', () => {
            expect(cinema.swapSeatsInHall('a', 2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return message if one input is less or equal to 0', () => {
            expect(cinema.swapSeatsInHall(0, 20)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return message if one input is less or equal to 0', () => {
            expect(cinema.swapSeatsInHall(-1, 20)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return message if one input1 ismore than 20', () => {
            expect(cinema.swapSeatsInHall(21, 20)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return message if input2 is a string', () => {
            expect(cinema.swapSeatsInHall(1, '19')).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return message if input2 is a string', () => {
            expect(cinema.swapSeatsInHall(1, 'b')).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return message if input2 is zero', () => {
            expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return message if input2 is less than zero', () => {
            expect(cinema.swapSeatsInHall(1, -1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return message if input2 is more than 20', () => {
            expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.'); 
        });
        it('should return message if input1 is the same as input2', () => {
            expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return message if input1 is the same as input2', () => {
            expect(cinema.swapSeatsInHall('1', '1')).to.equal('Unsuccessful change of seats in the hall.');
        });


        it('should return message if input is missing is invalid', () => {
            expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.');
        });        
    });
})