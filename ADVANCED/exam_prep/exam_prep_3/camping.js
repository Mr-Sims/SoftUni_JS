class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { 'child': 150, 'student': 300, 'collegian': 500 };
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
        if (!Object.keys(this.priceForTheCamp).includes(condition)) {
            throw new Error(`Unsuccessful registration at the camp.`)
        } else {
            if (this.listOfParticipants.some(el => el.name == name)) {
                return `The ${name} is already registered at the camp.`
            } else {
                if (money < this.priceForTheCamp[condition]) {
                    return `The money is not enough to pay the stay at the camp.`
                } else {
                    let participant = {
                        name,
                        condition,
                        power: 100,
                        wins: 0,
                    }
                    this.listOfParticipants.push(participant)
                    return `The ${name} was successfully registered.`
                }
            }
        }
    }
    unregisterParticipant(name) {
        let participant = this.listOfParticipants.filter(el => el.name == name)
        if (participant.length > 0) {
            let index = this.listOfParticipants.indexOf(participant[0])
            this.listOfParticipants.splice(index, 1)
            return `The ${name} removed successfully.`
        }
        else {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == 'Battleship') {
            if (!this.listOfParticipants.some(el => el.name == participant1)) {
                throw new Error(`Invalid entered name/s.`)
            }
            this.listOfParticipants.filter(x => x.name == participant1).map(x => x.power += 20)
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
        else if (typeOfGame == 'WaterBalloonFights') {
            if (!this.listOfParticipants.some(el => el.name == participant1) || !this.listOfParticipants.some(el => el.name == participant2)) {
                throw new Error(`Invalid entered name/s.`)
            }
            let participant1Obj = this.listOfParticipants.filter(x => x.name == participant1)[0]
            let participant2Obj = this.listOfParticipants.filter(x => x.name == participant2)[0]
            if(participant1Obj.condition != participant2Obj.condition) {
                throw new Error(`Choose players with equal condition.`)
            } 
            if (participant1Obj.power == participant2Obj.power) {
                return `There is no winner.`
            }
            else {
                if (participant1Obj.power > participant2Obj.power) {
                    this.listOfParticipants.filter(x => x.name == participant1).map(x => x.wins++)
                    return `The ${participant1} is winner in the game ${typeOfGame}.`
                } else {
                    this.listOfParticipants.filter(x => x.name == participant2).map(x => x.wins++)
                    return `The ${participant2} is winner in the game ${typeOfGame}.`
                }
            }
        }
    }
    toString() {
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`]
        this.listOfParticipants
            .sort((a, b) => {return b.wins - a.wins})
            .forEach(x => result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`))
             return result.join('\n')
    }
}

// test 1
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
/*
The money is not enough to pay the stay at the camp.
The Petar Petarson was successfully registered.
The Petar Petarson is already registered at the camp.
Uncaught Error: Unsuccessful registration at the camp.
*/

// test 2
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

/*
The Petar Petarson was successfully registered.
Uncaught Error: The Petar is not registered in the camp.
The Petar Petarson removed successfully.
*/

// test 3
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");

// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


/*
The Petar Petarson was successfully registered.
The Petar Petarson successfully completed the game Battleship.
The Sara Dickinson was successfully registered.
Uncaught Error: Choose players with equal condition.
The Dimitur Kostov was successfully registered.
The Petar Petarson is winner in the game WaterBalloonFights.
*/

// // test 4
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// console.log(summerCamp.toString());

/*
The Petar Petarson was successfully registered.
The Petar Petarson successfully completed the game Battleship.
The Sara Dickinson was successfully registered.
Uncaught Error: Choose players with equal condition.
The Dimitur Kostov was successfully registered.
The Petar Petarson is winner in the game WaterBalloonFights.
Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
Petar Petarson - student - 120 - 1
Sara Dickinson - child - 100 - 0
Dimitur Kostov - student - 100 - 0
*/


// // test 5
// let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
// console.log(camp.registerParticipant('Petar Petarson', 'child', 300)) // "The Petar Petarson was successfully registered.");
// console.log(camp.registerParticipant('Sara Dickinson', 'child', 200)) // "The Sara Dickinson was successfully registered.");
// console.log(camp.timeToPlay('Battleship', 'Sara Dickinson')) // "The Sara Dickinson successfully completed the game Battleship.");
// console.log(camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson','Petar Petarson')) // "The Sara Dickinson is winner in the game WaterBalloonFights.");
// console.log(camp.toString())


 /*`Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria
Sara Dickinson - child - 120 - 1
Petar Petarson - child - 100 - 0`);
*/
