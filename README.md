### `npm start`
Run the application with `npm start`

### Final Project: Case Analysis
Application that allows the system to store and retrieve details of employees, customers, services, and inspection bookings.

### Functional Requirements
- Employee
- Customer
- Property
- Inspection Booking

### Employee
- name
- age
- salary
- handleCustomer: interacts with Customer array (list of all Customer the Employee is interacting with)
- handleProperty: interacts with Property array (list of all the Property of the customer they are handling)
- handleBooking: interacts with Booking array (list of all the bookings that the employee is handling)

**NOTE:** For handle.., the Employee should only list all the properties and booking with the chosen Customer.

### Customer
**Variables**
- name
- age
- handleEmployee: interacts with Employee array (list of all the Employee the Customer is interacting with)
- handleProperty: interacts with Property array (list of all the Property that the Customer has)
- handleBooking: interacts with Booking array (list of all Booking that the Customer has)
**Methods**
### Property
**Variables**
- name
- price
- address
- handleCustomer: interacts with Customer (signify ownership, cannot be used by multiple objects)
- handleBooking: interacts with Booking (to show the Property)
**Methods**
### Booking
**Variables**
- title
- schedule
- commission: cut of Employee
- name: show Property.name
- address: show Property.address
- price: show Property.price
- handleEmployee: interacts with Employee (show who is working with the customer that booked it)
- handleCustomer: interacts with Customer (show who is booking)
- handleProperty: interacts with Property (show what Property is being booked?)
**Methods**
### Group Mates: TODO
**TODO:** Create GUI using ReactJS
**TODO:** Group mates, please suggest more variables for the Employee, Customer, Property, and Booking objects
### GUI
**Header:** Management Application
**Options:**
- Manage Employee
    - Create Employee
        - Constructor
    - Delete Employee
    - Add Customer to Employee
        - Note: Automatically changes Customer handle values too
        - Note: Customer working with Employee?
    - Edit Employee
        - Note: Change Employee values
    - Check Employee
        - Note: Check what Customer the Employee is handling
        - Note: Check what Property the Employee is handling
        - Note: Check what Booking the Employee is busy with
- Manage Customer
    - Create Customer
        - Note: Constructor
    - Delete Customer
    - Edit Customer values
    - Add Property to Customer
        - Note: Add what Property the Customer wants
    - Add Booking to Customer
        - Note: Add what Booking the Customer wants
    - Check Customer
        - Note: Check the Booking of the Customer
        - Note: Check the Property of the Customer
        - Note: Check the Employee the Customer is hiring
**TODO:** Please add the obvious options and settings, I don't think I've included everything. This isn't finished. Please help finish it.
### Notes
The objects `Employee.js`, `Customer.js`, `Property.js`, and `Booking.js` has been created. Please study and improve these objects to ensure that it has correct variables and methods. These files are not finished.

**Terminal Commands Used:**
`npm create-react-app final-project-case-analysis`: to create ReactJS project
`npm install react-router-dom`: to be able to import and use react-router-dom (website navigation, links)

**Recommendations**
- Learn how to use Git and Github.
- [A layman's introduction to Git](https://webtuu.com/blog/04/a-laymans-introduction-to-git): Learn how to use Git and GitBash. Note that when using Git, you are not sending anything to Github.
- [Uploading Files To GitHub Quick Start Guide](https://www.youtube.com/watch?v=qMck70tLDuo): Learn how to upload the Git'd files to Github.

**GitBash Commands**
- `git remote add origin https://github.com/WorkNicolas/final-project-case-analysis`: What Github repository to upload files to?
- `git commit -m "message"`: Only do this when there are changes. Nothing happens otherwise. What files to upload to the Github repository?
- `git push -u origin master`: upload files to master branch on the Github repository
- `git push`: upload files, will upload to the previously used branch