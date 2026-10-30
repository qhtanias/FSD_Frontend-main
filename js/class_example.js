class User {
    constructor(name) {
        this._name = name;
    }

    get_name() {
        return this._name;
    }

    set_name(value) {
        if (value.length > 0) {
            this._name = value;
        }
    }

    sayHello() {
        console.log(`Hello World! ${this.name}. Nice to meet you.`);
    }

    get name() {
        return this._name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
}   // <-- closed the User class here

class Rabbit extends User {
    hide() {
        console.log(`${this.name} hides!`);
    }

    stop() {
        super.run(0);   // super.stop() doesn't exist — call run(0) instead
        console.log(`${this.name} stopped.`);
    }
}

let user = new User("John");
user.sayHello();                 // Hello World! John. Nice to meet you.
console.log(user.get_name());    // John
user.set_name("Jane");
console.log(user.get_name());    // Jane
user.run(50);                    // Jane runs with speed 50.

let rabbit = new Rabbit("Bunny");
rabbit.hide();                   // Bunny hides!
rabbit.run(30);                  // Bunny runs with speed 30.
rabbit.stop();                   // Bunny runs with speed 0. / Bunny stopped.