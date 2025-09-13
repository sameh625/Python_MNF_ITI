number_of_students = int(input("Enter the number of students in the class:"))
students={}
for i in range(1,number_of_students+1):
    name = input(f"Name of sutdent {i}:")
    grade = input(f"Grade of student {i}:")

    students[f"Student_{i}"]={
        "name":name,
        "grade":grade
    }

print()
for student, details in students.items():
    print(f"{student}: Name: {details['name']}, Grade:{details['grade']}")