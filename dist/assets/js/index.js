"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let x = 10;
x = 49;
console.log(x);
const y = 12;
const z = y;
const sum = (y + z);
console.log(sum * sum);
let fisrtName = "Gabriel";
let age = 25;
const isAdmin = true;
console.log(typeof fisrtName);
const myNumbers = [1, 2, 3, 4, 8];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(fisrtName.toLocaleUpperCase().concat(" <==> "));
myNumbers.push(777);
console.log(myNumbers);
console.log("Down:");
console.log(myNumbers.length);
let tupla;
tupla = [1, "2", ["5", "7"], [88, 985]];
console.log(tupla);
const user = {
    name: "Gabriel",
    age: 23,
    email: "vagavsgavs@hotmail.com"
};
user.age = 18;
console.log(user);
let id = 10;
id = 255;
const userId = "250";
console.log("Type ALIAS ==>" + userId);
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Gola V",
    size: Size.M
};
console.log(camisa);
let teste;
teste = 'Ok';
teste = null;
function addction(a, b) {
    return a + b;
}
console.log(addction(12, 12));
function helloTo(name) {
    return `Hello ${name}`;
}
console.log(helloTo('Gabriel'));
function helloToVoid(name) {
    console.log(`Hello ${name}`.concat(" => Void"));
}
helloToVoid("Isso é um retorno void");
function greeating(name, greet) {
    if (greet) {
        console.log(`${greet} ${name}`);
    }
    else {
        console.log("Seu nome é Welcome né Gabriel? " + name);
    }
}
greeating("Gabriel", "Welcome Back");
greeating("Welcome");
function sumNumber(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumber({ n1: 15, n2: 65 }));
function multiplyNumber(nums) {
    let a = nums.n1;
    let b = nums.n2;
    return { result: `Result of ${nums.n1} X ${nums.n2} = ${a * b}` };
}
console.log(multiplyNumber({ n1: 13, n2: 25 }));
const resultObject = multiplyNumber({ n1: 13, n2: 25 });
const multiplicationResult = resultObject.result.match(/\d+/g).map(Number)[2];
console.log(multiplicationResult);
function doSomething(param) {
    if (typeof param === 'number') {
        multiplicationResult;
        console.log(param);
        return;
    }
    else {
        console.log("False === true");
    }
}
doSomething(150);
doSomething(false);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`Item => ${item}`);
    });
}
const a1 = [1, 2, 3, 4, 5];
const a2 = ["1", "3", "100"];
showArraysItems(a1);
showArraysItems(a2);
class User {
    constructor(nameUser, roleUser, isApproved) {
        this.nameUser = nameUser;
        this.roleUser = roleUser;
        this.isApproved = true;
    }
    ShowUserNameAndRole() {
        console.log(`Name is ${this.nameUser} && role = ${this.roleUser}`);
    }
    ShowOnlyUserRole(canShow) {
        if (canShow) {
            console.log(`A regra do user é ${this.roleUser}`);
        }
        else {
            console.log("Infomação Restrita");
        }
    }
}
const Zeca = new User("Zeca", "Admin", true);
console.log(Zeca);
Zeca.ShowOnlyUserRole(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrandVehicle() {
        console.log(this.brand);
    }
}
const c1 = new Car("Ford", 4);
c1.showBrandVehicle();
console.log(c1.wheels);
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.8);
console.log(a4);
a4.showBrandVehicle();
const brandCar = c1.showBrandVehicle();
const brandSuperCar = a4.showBrandVehicle();
const brandsArray = [brandCar, brandSuperCar];
const brands = brandsArray.join(" ");
console.log(brands);
function BaseParametersDecorator() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParametersDecorator(),
    __metadata("design:paramtypes", [String])
], Person);
const Ricardo = new Person("Ricardo");
console.log(Ricardo);
