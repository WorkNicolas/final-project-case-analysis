class Booking {
    constructor(id, title, schedule, name, address, price, handleEmployee, handleCustomer, handleProperty){
        this.id = id;
        this.title = title;
        this.schedule = schedule;
        this.name = name; //maybe it should just be handled by Property.name?
        this.address = address; //maybe it should just be handled by Property.address?
        this.price = price; //maybe it should just be handled by Property.price?
        this.handleEmployee = handleEmployee;
        this.handleCustomer = handleCustomer;
        this.handleProperty = handleProperty
    }
    //Getters
    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    getSchedule(){
        return this.schedule;
    }
    getName(){
        return this.name;
    }
    getAddress(){
        return this.address;
    }
    getPrice(){
        return this.price;
    }
    getEmployee(){
        return this.handleEmployee;
    }
    getCustomer(){
        return this.handleCustomer;
    }
    getProperty(){
        return this.handleProperty;
    }
    //Mutators
    setId(id){
        this.id = id;
    }
    setTitle(title){
        this.title = title;
    }
    setSchedule(schedule){
        this.schedule = schedule;
    }
    setName(name){
        this.name = name;
    }
    setAddress(handleProperty){
        this.address = handleProperty.address;
    }
    setPrice(handleProperty){
        this.price = handleProperty.price;
    }
    setEmployee(handleEmployee){
        this.handleEmployee = handleEmployee;
    }
    setCustomer(handleCustomer){
        this.handleCustomer = handleCustomer;
    }
    setProperty(handleProperty){
        this.handleProperty = handleProperty;
    }
}

export default Booking