function solve(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const tickets = []

    for (let el of arr) {
        let [destination, price, status] = el.split('|');

        let ticket = new Ticket(destination, price, status)
        tickets.push(ticket)
    }

    if (criteria == 'price') {
        return tickets.sort((a, b) => a[criteria] - b[criteria])
    } else {
        return tickets.sort((a, b) => a[criteria].localeCompare(b[criteria]))

    }
}

console.log(solve(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination'))

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
))

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|available',
'Philadelphia|132.20|departed',
'Chicago|140.20|available',
'Dallas|144.60|sold',
'New York City|206.20|sold',
'New York City|240.20|departed',
'New York City|305.20|departed'],
'price'));