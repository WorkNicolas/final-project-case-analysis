class Property{
    constructor(name, price, address){
        this.name = name;
        this.price = price;
        this.address = address;
        this.handleCustomer = null;
        this.handleBooking = null;
    }
    //Getters
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