function personTeacherStudent() {
    class Person {
        constructor(name, email) {
            this.name = name
            this.email = email
        }
        toString() {
            let classname = this.constructor.name;
            let res = []
            for (let el in this) {
                res.push(`${el}: ${this[el]}`)                
            }
            return `${classname} (${res.join(', ')})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email)
            this.subject = subject
        }
        // toString() {
        //     return super.toString()
        // }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email)
            this.course = course
        }
        // toString() {
        //     return super.toString() 
        // }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = personTeacherStudent() 
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Ivan",'ivan@ivan.com',"Graphics");
console.log(t.toString()) //).to.equal('Teacher (name: Ivan, email: ivan@ivan.com, subject: Graphics)');