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

// TASK 2: CREATING A MANAGER CLASS

//Create a Manager class that extends Employee
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize; // Add a new property teamSize
    }
    getDetails() { // Override to include the team size
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
    calculateBonus() { // Add a method that returns 10% of the manager's annual salary
        return super.calculateAnnualSalary() * 0.1;
    }
}
// Test Cases
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());

// TASK 3: CREATING A COMPANY CLASS

// Create a company class 
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
}
listEmployees() {
    this.employees.forEach(employee => console.log(employee.getDetails()));
}
}
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

// TASK 4: IMPLEMENTING A PAYROLL SYSTEM

// Add a method that returns the sum of all employee salaries (including managers)
class CompanyWithPayroll extends Company {
    calculateTotalPayroll() {
        return this.employees.reduce((total, emp) => {
            return emp instanceof Manager
                ? total + emp.calculateAnnualSalary() + emp.calculateBonus()
                : total + emp.calculateAnnualSalary();
        }, 0);
    }

}
const payrollCompany = new CompanyWithPayroll("TechCorp");
payrollCompany.addEmployee(emp1);
payrollCompany.addEmployee(mgr1);
console.log(payrollCompany.calculateTotalPayroll());
