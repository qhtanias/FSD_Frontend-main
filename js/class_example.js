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
        console.log(`${this.name} runs with speed ${this.speed}.`);  // backticks, not single quotes
    }
class Rabbit extends Animal {
    hide(){
        console.log(`${this.name} hides!`);
          
    }
    stop(){
        super.stop();
    }
}

let user = new User("John");
user.sayHello();                 // Hello World! John. Nice to meet you.
console.log(user.get_name());    // John
user.set_name("Jane");
console.log(user.get_name());    // Jane
user.run(50);                    // Jane runs with speed 50.