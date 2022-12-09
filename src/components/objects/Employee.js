class Employee {
    constructor(id, fname, lname, age, gender, dateOfBirth, position, salary, contact, email, address){
        //14
        this.id = id;
        this.fname = fname;
        this.lname = lname
        this.age = age;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.position = position;
        this.salary = salary;
        this.contact = contact;
        this.email = email;
        this.address = address;
        
        this.handleCustomer = null;
        this.handleProperty = null;
        this.handleBooking = null;
    }
    //Getters
    getId(){
        return this.id;
    }
    getFname(){
        return this.fname;
    }
    getLname(){
        return this.lname
    }
    getAge(){
        return this.age;
    }
    getGender(){
        return this.gender;
    }
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    getPosition(){
        return this.position;
    }
    getSalary(){
        return this.salary;
    }
    getContact(){
        return this.contact;
    }
    getEmail(){
        return this.email;
    }
    getAddress(){
        return this.address;
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
    setId(id){
        this.id = id;
    }
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }
    setGender(gender){
        this.gender = gender;
    }
    setDateOfBirth(dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    }
    setPosition(position){
        this.position = position;
    }
    setSalary(salary){
        this.salary = salary;
    }
    setContact(contact){
        this.contact = contact;
    }
    setEmail(email){
        this.email = email;
    }
    setAddress(address){
        this.address = address;
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

export default Employee