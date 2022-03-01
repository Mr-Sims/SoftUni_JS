class Company {
    constructor() {
        this.departments = {}
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error('Invalid input!')
        } else {

            if (!this.departments[department]) {
                this.departments[department] = []
            }
            this.departments[department].push({
                name,
                salary,
                position
            })
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    }
    bestDepartment() {
        let bestAverageSalary = { dep: '', salary: 0 }

        for (let dep in this.departments) {
            let currentAverage = 0
            let totalSalaries = 0
            for (let emp of this.departments[dep]) {
                totalSalaries += emp.salary
            }
            currentAverage = totalSalaries / this.departments[dep].length

            if (bestAverageSalary.salary < currentAverage) {
                bestAverageSalary.dep = dep
                bestAverageSalary.salary = currentAverage
            }
        }

        let sorted = this.departments[bestAverageSalary.dep].sort((a, b) => {
            if (a.salary === b.salary) {
                return a.name.localeCompare(b.name)
            } else {
                return b.salary - a.salary
            }
        })
        let emps = []
        for (let emp of sorted) {
            emps.push(`${emp.name} ${emp.salary} ${emp.position}`)
        }
        return `Best Department is: ${bestAverageSalary.dep}\nAverage salary: ${bestAverageSalary.salary.toFixed(2)}\n` + emps.join('\n')
    };
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
