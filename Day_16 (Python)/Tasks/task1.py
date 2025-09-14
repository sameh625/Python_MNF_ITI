import csv

class Employee:
    ids = []
    
    def __init__(self, emp_id, name, position, salary, department):
        if emp_id in Employee.ids:
            raise ValueError(f"Employee ID {emp_id} already exists!")
        self.emp_id = emp_id
        Employee.ids.append(emp_id)
        self.name = name
        self.position = position
        self.salary = salary
        self.department = department

    def display_info(self):
        print(f"ID: {self.emp_id}, Name: {self.name}, Position: {self.position}, Salary: {self.salary}, Department: {self.department}")

    def update_salary(self, new_salary):
        self.salary = new_salary
    
    def update_position(self, new_position):
        self.position = new_position



class Department:
    def __init__(self, dept_name):
        self.dept_name = dept_name
        self.employees = []

    def add_employee(self, employee):
        self.employees.append(employee)
    
    def remove_employee(self, emp_id):
        self.employees = [emp for emp in self.employees if emp.emp_id != emp_id]
        if emp_id in Employee.ids:
            Employee.ids.remove(emp_id)

    def list_employees(self):
        for employee in self.employees:
            print(f"ID: {employee.emp_id}, Name: {employee.name}")

    def get_average_salary(self):
        total_salary = sum(emp.salary for emp in self.employees)
        return total_salary / len(self.employees)
    
    


class Company:
    def __init__(self, company_name):
        self.company_name = company_name
        self.departs = []
    
    def add_department(self, dept):
        self.departs.append(dept)
    
    def remove_department(self, dept_name):
        self.departs = [depart for depart in self.departs if depart.dept_name != dept_name]

    def find_employee_by_name(self,name):
        for depart in self.departs:
            for emp in depart.employees:
                if name == emp.name:
                    return "User is found"
        
        return "Not found"
    
    def highest_paid_employee(self):
        highest = None
        for depart in self.departs:
            for emp in depart.employees:
                if highest is None or highest.salary < emp.salary:
                    highest = emp
            
        return emp
    
    def department_report(self):
        for depart in self.departs:
            print(f"Name: {depart.dept_name}: \n Number of employees: {len(depart.employees)}\n Average salary: {depart.get_average_salary()}\n")
                

def save_all_employees(company):
    with open("employees.csv", "w", newline="") as file:
        fields = ["emp_id", "name", "position", "salary", "department"]
        writer = csv.DictWriter(file, fieldnames=fields)
        writer.writeheader()
        for dept in company.departs:
            for emp in dept.employees:
                writer.writerow({"emp_id": emp.emp_id,"name": emp.name,"position": emp.position,"salary": emp.salary,"department": emp.department,}
)

def load_all_employees():
    employees = []
    with open("employees.csv", "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            employees.append(row)
    return employees


comp = Company("meow meow")
cs = Department("CS")
it = Department("IT")
hr = Department("HR")
comp.add_department(cs)
comp.add_department(it)
comp.add_department(hr)

e1 = Employee(1, "Sameh", "Developer", 7000, "CS")
e2 = Employee(2, "Ali", "Tester", 5000, "IT")
e3 = Employee(3, "Sara", "Manager", 8000, "HR")

cs.add_employee(e1)
it.add_employee(e2)
hr.add_employee(e3)

comp.department_report()
print("Highest Paid Employee:\n")
comp.highest_paid_employee().display_info()

print(comp.find_employee_by_name("Ali"))
save_all_employees(comp)