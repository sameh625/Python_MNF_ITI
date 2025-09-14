import csv
FILE_NAME = "data.csv"

def load_employees():
    employees=[]
    with open(FILE_NAME,"r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            employees.append(row)
        
    return employees
    

def show_employees(employees):
    print()
    for employee in employees:
        print(f'name: {employee["name"]}, age: {employee["age"]}, department:{employee["department"]}')


def add_employee(employees):
    name = input("Name: ")
    age = input("Age: ")
    dep = input("department: ")

    with open(FILE_NAME,"a") as file:
        fields = ["name","age","department"]
        writer = csv.DictWriter(file, fieldnames=fields)
        writer.writerow({"name": name, "age": age, "department": dep})
        employees.append({"name": name, "age": age, "department": dep})

    print("Employee Added successfully")
    
    
def delete_employee(employees):
    dele = input("Enter name of employee: ")
    updated_employees = [emp for emp in employees if emp["name"] != dele]

    if len(updated_employees) == len(employees):
        print("Employee not found!")
    else:
        with open(FILE_NAME, "w", newline="") as file:
            fields = ["name", "age", "department"]
            writer = csv.DictWriter(file, fieldnames=fields)
            writer.writeheader()
            writer.writerows(updated_employees)
            print("Employee deleted successfully!")


def search_employee(employees):
    search = input("Enter name of employee: ")
    for employee in employees:
        if(search == employee["name"]):
            print(employee)
            return
    print("Employee not found")



def menu():
    while(True):
        employees = load_employees()
        print("\n1. Show all employees")
        print("2. Add a employee")
        print("3. Delete a employee")
        print("4. Search a employee")
        print("5. Exit\n")
        
        choice = input("Enter the choice: ")

        match choice:
            case "1":show_employees(employees)
            case "2":add_employee(employees)
            case "3":delete_employee(employees)
            case "4":search_employee(employees)
            case "5":return
            case _:print("!!!!!!!!!!!!!! INVALID CHOICE !!!!!!!!!!!!!!!!")




menu()