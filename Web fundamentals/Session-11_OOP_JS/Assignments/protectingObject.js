const person = {
  _name: "John",
  _email: "john@example.com",
  _age: 30,
  get name() {
    return this._name;
  },
  get email() {
    return this._email;
  },
  set age(newAge) {
    this._age = newAge;
  },
  getAge() {
    return this._age;
  },
  setAge(newAge) {
    this._age = newAge;
  },
};

// Testing the person object
console.log(person.name);
console.log(person.email);
person.age = 35; // Using the setter
console.log(person.getAge()); // Output: 35
person.setAge(40);
console.log(person.getAge()); // Output: 40
