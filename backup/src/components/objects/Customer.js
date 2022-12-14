class Customer {
    constructor(id, fname, lname, age, gender, email, address, contact, balance){
        //12
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gender = gender;
        this.balance = balance;
        this.email = email;
        this.address = address;
        this.contact = contact;
        
        this.handleEmployee = null;
        this.handleProperty = null;
        this.handleBooking = null;
    }
    //Getters
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getGender(){
        return this.gender;
    }
    getBalance(){
        return this.balance;
    }
    getEmail(){
        return this.email;
    }
    getContact(){
        return this.contact
    }
    getAddress(){
        return this.address;
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
    setGender(gender){
        this.gender = gender;
    }
    setBalance(balance){
        this.balance = balance;
    }
    setEmail(email){
        this.email = email;
    }
    setContact(contact){
        this.contact = contact;
    }
    setAddress(address){
        this.address = address;
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
    //Methods
}

export default Customer