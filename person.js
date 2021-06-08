// const person = {
//     name: 'vishnu',
//     age: 25
// };

// module.exports = person

class Person{
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    greeting(){
        console.log(`hi Mr.${this.name} and age is ${this.age}`);
    }
}

module.exports = Person