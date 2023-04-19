let person = {
    name: 'murshid',
    age: 28,
    greeting() {
        console.log(`hi its ${this.name} and iam ${this.age} old`);
    }
}

let sample = (personData) => {
    personData.greeting();
}

sample(person);
// const { name, age } = person
// console.log(name, age);

// let arry = ['murshid', 28]
// let [nam, ag] = arry;
// console.log(nam, ag)