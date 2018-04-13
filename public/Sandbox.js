const square = n => (n*n);

setTimeout(()=> console.log(square(5)), 1000);
console.log("Test");


var Person = function(name, age){
    this.name = name;
    this.age = age;
    this.print = () => console.log('name: '+this.name +' age: '+this.age);
}

let p1 = new Person ('freddy', 12);
let p3 = new Person ('Franz', 55);

p1.print();
p3.print();
p1.name = "Hans";
p3.name = "Ueli";
p1.print();
p3.print();

Person.prototype.klump = () => console.log("Eclipse rulez");
p1.klump();
let p2 = new Person ('Raoul', 55);
p2.klump();

var User = function(userId){
    this.userId = userId;
    this.print = () => console.log('userId: '+this.userId +' name: '+this.name +' age: '+this.age);
}

User.prototype = new Person("karl", 33);
let u1 = new User(1234);
u1.print();
u1.userId = 333;
u1.name = 'sadfsd';
u1.print();