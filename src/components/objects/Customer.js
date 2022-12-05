//NodeJS Syntax
class Customer {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.handleEmployee = null;
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
    getEmployee(){
        return this.handleEmployee;
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
    setEmployee(handleEmployee){
        this.handleEmployee = handleEmployee;
    }
    setProperty(handleProperty){
        this.handleProperty = handleProperty;
    }
    setBooking(handleBooking){
        this.handleBooking = handleBooking;
    }
}