const createUser = function (name, age) {
    return {
        name,
        age,
        toString: function() {
            return `${this.name} is ${this.age} y.o.`;
        }
    };
};

const users = [
    createUser("John", 21),
    createUser("Torry", 18),
    createUser("Kate", 23),
    createUser("Pete", 22),
];

users.sort((a, b) => (a.age > b.age) ? 1 : -1);
console.log(users);
