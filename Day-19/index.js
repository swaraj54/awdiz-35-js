
JavasScript -> JSON javascript object notation

js  - code
{ name : "Awdiz", age : 12, location : "Vashi" }

json - browser
{ "name" : "Awdiz", "age" :12, "location": "Vashi" }

const jsData = { name : "Awdiz", age : 12, location : "Vashi" }
console.log(jsData,"jsData")

const jsonData = JSON.stringify(jsData)
console.log(jsonData,"jsonData")

const jsonToJsConvertedData = JSON.parse(jsonData)
console.log(jsonToJsConvertedData,"jsonToJsConvertedData")









function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    return "Welcome"
}

const person1 = new Person("Virat", 38)
console.log(person1.greet(),"greet()")
console.log(person1.name,"name")
console.log(person1.age,"age")

const person2 = new Person("Rohit", 40)
console.log(person2,"person2")











// Class 

class Counter{
    constructor(){
        this.count = 0;
    }
    increment(){
        this.count++;
        console.log("Counter", this.count)
    }
    decrement(){
        this.count--;
        console.log("Counter", this.count)
    }
    reset(){
        this.count = 0;
        console.log("Counter", this.count)
    }
}



const c1 = new Counter();
c1.increment();
c1.reset();
c1.increment();
c1.increment();



const counter = new Counter();
counter.increment();
counter.increment();
counter.decrement();

