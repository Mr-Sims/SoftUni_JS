function cinemaTickets(input) {
    let counter = 0;
    let command = input[counter];
    let studentTickets = 0;
    let standartTickets = 0;
    let kidsTickets = 0;

    while (command != "Finish") {

        let movieName = command;
        counter++;
        let freeSeats = Number(input[counter]);
        counter++;
        let data = input[counter];
        counter++;
        let currentMovieTotal = 0
        while (data != "End") {
       
            let ticketType = data;
            currentMovieTotal++;
            if (ticketType === 'student') {
                studentTickets++;
            } else if (ticketType === "standard") {
                standartTickets++;
            } else if (ticketType === "kid") {
                kidsTickets++;
            }
            if (currentMovieTotal >= freeSeats) {
                break;
            }
            data = input[counter];
            counter++;
        }
        command = input[counter]

        let fullness = (currentMovieTotal / freeSeats) * 100
        console.log(`${movieName} - ${fullness.toFixed(2)}% full.`)
    }
    let totalTickets = standartTickets + studentTickets + kidsTickets;
    let percentStudent = (studentTickets / totalTickets) * 100;
    let percentStandart = (standartTickets / totalTickets) * 100;
    let percentKids = (kidsTickets / totalTickets) * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentStudent.toFixed(2)}% student tickets.`);
    console.log(`${percentStandart.toFixed(2)}% standard tickets.`);
    console.log(`${percentKids.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])

cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"])