# 2-Write a program that asks for a person’s age and prints:
# • "Child" age < 13
# • "Teenager" 13 ≤ age < 20
# • "Adult" 20 ≤ age < 60
# • "Senior" age ≥ 60


age = int(input("Enter your age:"))

if age < 13:
    print("Child")
elif 13<=age<20:
    print("Teenager")
elif 20<=age<60:
    print("Adult")
else:
    print("Senior")
    