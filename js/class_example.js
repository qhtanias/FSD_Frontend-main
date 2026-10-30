class User {
    constructor(name) {
        this.name = name;
    }
    
    get_name(){
        return this._name;
    }
    
    set_name(value){
        if (value.length)
    }
    sayHello() {
        // Use template literals (backticks) to insert this.name correctly
        console.log(`Hello World! ${this.name}. Nice to meet you.`);
    }
}

let user = new User("John");
user.sayHello();

