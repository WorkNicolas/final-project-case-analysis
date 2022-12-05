//NodeJS Syntax
class Employee {
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.handleCustomer = null;
        this.handleProperty = null;
        this.handleBooking = null;
    }
    //Getters
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getSalary(){
        return this.salary;
    }
    getCustomer(){
        return this.handleCustomer;
    }
    getProperty(){
        return this.handleProperty;
    }
    getBooking(){
        return this.handleBooking;
    }
    //Mutators
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }
    setSalary(salary){
        this.salary = salary;
    }
    setCustomer(handleCustomer){
        this.handleCustomer = handleCustomer;
    }
    setProperty(handleProperty){
        this.handleProperty = handleProperty;
    }
    setBooking(handleBooking){
        this.handleBooking = handleBooking;
    }
}