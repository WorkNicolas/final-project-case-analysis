class Property{
    constructor(id, name, price, address){
        this.id = id;
        this.name = name;
        this.price = price;
        this.address = address;
        this.handleCustomer = null;
        this.handleBooking = null;
    }
    //Getters
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    getAddress(){
        return this.address;
    }
    getCustomer(){
        return this.handleCustomer;
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
    setPrice(price){
        this.price = price;
    }
    setAddress(address){
        this.address = address;
    }
    setCustomer(handleCustomer){
        this.handleCustomer = this.handleCustomer;
    }
    setBooking(handleBooking){
        this.handleBooking = this.handleBooking;
    }
}

export default Property