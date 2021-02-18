//set up properties
class Employee{
    Employeeinfo(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id;

    }
    getName(){
       return this.name;

    };
    getId(){
        return this.id;
    };
    getRole(){
        return "employee";
    };
    getEmail(){
        return this.email;

    }

}

module.exports = Employeeinfo
//export classes (constructor function files)