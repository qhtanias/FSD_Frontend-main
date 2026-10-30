class User{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log("Hello World!");
    }
}
let user = new User("John");
user.sayHello();