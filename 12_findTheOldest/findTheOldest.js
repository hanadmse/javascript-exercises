const findTheOldest = function(people) {
    let oldest = "";
    let oldestAge = 0;
    people.forEach(person => {
        console.log(person.name + " " + person.age);
        let age = 0;
        if (person.yearOfDeath !== undefined) {
            age = person.yearOfDeath - person.yearOfBirth;
        } 
        else {
            age = 2024 - person.yearOfBirth;
        }
        if (age > oldestAge) {
            oldestAge = age
            oldest = person;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
