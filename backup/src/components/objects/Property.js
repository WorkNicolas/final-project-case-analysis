class Property{
    constructor(id, price, address, size, org, bds, ba){
        //6
        this.id = id;
        this.name = null;
        this.price = price;
        this.address = address;
        this.size = size; //sqft
        this.org = org; //organization
        this.bds = bds; //bedrooms
        this.ba = ba; //bathrooms
        
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
    getSize(){
        return this.size;
    }
    getOrg(){
        return this.org;
    }
    getBds(){
        return this.bds;
    }
    getBa(){
        return this.ba;
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
    setSize(size){
        this.size = size;
    }
    setOrg(org){
        this.org = org;
    }
    setBds(bds){
        this.bds = bds;
    }
    setBa(ba){
        this.ba = ba;
    }

    setCustomer(handleCustomer){
        this.handleCustomer = handleCustomer;
    }
    setBooking(handleBooking){
        this.handleBooking = handleBooking;
    }
}

export default Property