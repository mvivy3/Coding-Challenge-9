// TASK 1: CREATING AN EMPLOYEE CLASS

// Create a class with properties
class Employee {
    constructor(name, id, department, salary) {
        this.name = name; // Assign name 
        this.id = id; // Assign id
        this.department = department; // Assign department
        this.salary = salary; // Assign salary
    }
    getDetails(){ // Add a method that returns a  formatted string of employee details
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
    calculateAnnualSalary() { // Add a method that returns the employee's annual salary
        return this.salary * 12;
    }
}
// Test Cases
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails());
console.log(emp1.calculateAnnualSalary());
