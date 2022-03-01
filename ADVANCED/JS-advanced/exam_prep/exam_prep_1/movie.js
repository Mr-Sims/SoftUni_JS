class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName
        this.ticketPrice = Number(ticketPrice)
        this.screenings = []
        this.totalProfit = 0;
        this.totalSoldTickets = 0;
    };

    newScreening(date, hall, description) {
        let object = {
            date,
            hall,
            description
        }
        const found = this.screenings.some(obj => (obj.date === date && obj.hall === hall));
        if (found) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        }
        else {
            this.screenings.push(object)
            return `New screening of ${this.movieName} is added.`
        }
    };

    endScreening(date, hall, soldTickets) {
        const found = this.screenings.find(obj => (obj.date === date && obj.hall === hall));
        if (!found) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        }
        let currentProfit = this.ticketPrice * Number(soldTickets)
        this.totalProfit += currentProfit
        this.totalSoldTickets += soldTickets
        this.screenings.splice(this.screenings.indexOf(found), 1)
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`
    };

    toString() {
        let result = [
            `${this.movieName} full information:`,
            `Total profit: ${this.totalProfit.toFixed(0)}$`,
            `Sold Tickets: ${this.totalSoldTickets}`]

        if (this.screenings.length > 0) {
            result.push(`Remaining film screenings:`)
            this.screenings
                .sort((a, b) => a.hall.localeCompare(b.hall))
                .forEach((obj) => {
                    result.push(`${obj.hall} - ${obj.date} - ${obj.description}`)
                })
        } else {
            result.push(`No more screenings!`)
        }
        return result.join('\n')
    };
}


let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`)); // New screening of Wonder Woman 1984 is added.
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));// New screening of Wonder Woman 1984 is added.
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));// New screening of Wonder Woman 1984 is added.

console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150)); // Wonder Woman 1984 movie screening on October 2, 2020 in IMAX 3D hall has ended. Screening profit: 1500
console.log(m.endScreening('October 3, 2020', 'Main', 78)); // Wonder Woman 1984 movie screening on October 3, 2020 in Main hall has ended. Screening profit: 780

console.log(m.toString());
// Wonder Woman 1984 full information:
// Total profit: 2280$
// Sold Tickets: 228
// Remaining film screenings:
// IMAX 3D - October 4, 2020 - 3D


m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
// Wonder Woman 1984 full information:
// Total profit: 2280$
// Sold Tickets: 228
// Remaining film screenings:
// 235 - October 4, 2020 - regular
// 235 - October 3, 2020 - regular
// IMAX 3D - October 4, 2020 - 3D
// Main - October 5, 2020 - regular
// Main - October 4, 2020 - regular

