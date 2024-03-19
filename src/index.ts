// Definindo variáveis com tipos específicos
let x: number = 10;
x = 49;
console.log(x);

// Inferência de tipo e uso de tipos explícitos
const y = 12;
const z: number = y;
const sum: number = (y + z);
console.log(sum * sum);

// Declaração de variáveis com tipos básicos
let firstName: string = "Gabriel";
let age: number = 25;
const isAdmin: boolean = true;
console.log(typeof firstName);

// Uso de array e métodos de array
const myNumbers: number[] = [1, 2, 3, 4, 8];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toLocaleUpperCase().concat(" <==> "));
myNumbers.push(777);
console.log(myNumbers);
console.log("Down:")
console.log(myNumbers.length);

// Uso de tuplas
let tupla: [number, string, string[], number[]];
tupla = [1, "2", ["5", "7"], [88, 985]];
console.log(tupla);

// Uso de objetos literais
const user: { name: string, age: number, email: string } = {
    name: "Gabriel",
    age: 23,
    email: "vagavsgavs@hotmail.com"
};
user.age = 18; //23 antes
console.log(user);

// Uso de tipos de união
let id: string | number = 10;
id = 255;

// Definição de um tipo de união personalizado
type myIdTypeOnly = string | number;
const userId: myIdTypeOnly = "250";
console.log("Type ALIAS ==>" + userId);

// Uso de enum
enum Size {
    P = "Pequeno",
    M = "Medio",
    G = "Grande"
}
const camisa = {
    name: "Gola V",
    size: Size.M
}
console.log(camisa);

// Uso de tipos literais
let teste: "Ok" | null;
// teste = "Duda"; // Erro, pois "Duda" não é um tipo válido
teste = 'Ok';
teste = null;

// Declaração de funções
function addction(a: number, b: number) {
    return a + b;
}

console.log(addction(12,12));
//console.log(addction(15, "Ok")); // <-Erro

function helloTo(name:string): string{
    //return true;
    return `Hello ${name}`;
}

console.log(helloTo('Gabriel'));


function helloToVoid(name:string): void{
    
    //return nada
    console.log(`Hello ${name}`.concat(" => Void"));
}

helloToVoid("Isso é um retorno void") //Void para funçoes que nao retornam nada

function greeating(name:string, greet?:string): void{
    if(greet){
        console.log(`${greet} ${name}`);
    }else{
        console.log("Seu nome é Welcome né Gabriel? " + name)
    }
}

greeating("Gabriel", "Welcome Back");
greeating("Welcome");


//Interfaces
interface MathFunctionParams{
    n1: number;
    n2: number;
}

function sumNumber(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}

console.log(sumNumber({ n1: 15, n2: 65})); //acessando a interface pelo Sum

function multiplyNumber(nums: MathFunctionParams){
    let a = nums.n1;
    let b = nums.n2;
    return { result: `Result of ${nums.n1} X ${nums.n2} = ${a * b}` }; //Com string
}

console.log(multiplyNumber({ n1: 13, n2: 25}));

// Chamada da função
const resultObject = multiplyNumber({ n1: 13, n2: 25 });

// Acesso à propriedade 'result' e extração do resultado da multiplicação
const multiplicationResult = resultObject.result.match(/\d+/g)!.map(Number)[2];

// Impressão do resultado no console
console.log(multiplicationResult);

//narrowing
function doSomething(param: number | boolean){
    if(typeof param === 'number'){
        multiplicationResult;
        console.log(param)
        return;
    }else{
        console.log("False === true");
    }
}

doSomething(150);
doSomething(false);

//genereics
function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`Item => ${item}`)
    });
}

const a1 = [1,2,3,4,5];
const a2 = ["1","3","100"];

showArraysItems(a1);
showArraysItems(a2);

//classes

class User{
    nameUser
    roleUser
    isApproved

    constructor(nameUser:string, roleUser:string, isApproved:boolean){
        this.nameUser = nameUser;
        this.roleUser = roleUser; 
        this.isApproved = true;
    }

    ShowUserNameAndRole(){
        console.log(`Name is ${this.nameUser} && role = ${this.roleUser}`);
    }

    ShowOnlyUserRole(canShow: boolean) {
        if (canShow) {
            console.log(`A regra do user é ${this.roleUser}`);
        } else {
            console.log("Infomação Restrita");
        }
    }
}

const Zeca = new User("Zeca", "Admin", true);
console.log(Zeca);

//Zeca.ShowUserNameAndRole();
Zeca.ShowOnlyUserRole(true);
//Zeca.ShowUserNameAndRole(false) -> aqui ele da informação restrita;


//Inteface + Class

interface IVehicle{
    brand: string;
    showBrandVehicle():void;
}

class Car implements IVehicle{
    brand;
    wheels;

    constructor(brand: string, wheels: number){
        this.brand = brand;
        this.wheels = wheels
    }

    showBrandVehicle(): void {
        console.log(this.brand);
    }
} 

const c1 = new Car("Ford", 4);
c1.showBrandVehicle();
console.log(c1.wheels);

// herança

class SuperCar extends Car{
    
    engine;

    constructor(brand:string, wheels: number, engine: number){
        super(brand, wheels);
        this.engine = engine
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


//Decorator
function BaseParametersDecorator(){
    return function<T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParametersDecorator()
class Person {
    name;
    constructor(name:string){
        this.name = name
    }
}

const Ricardo = new Person("Ricardo");
console.log(Ricardo); //Agora ele aparece com Id aleatorio e o createdAt