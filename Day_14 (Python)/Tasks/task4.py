# 4-Write a program that asks the user for a month (January–
# December) and prints how many days it has (assume February = 28).

months_and_days = {
    "January": 31,
    "February": 28, 
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31
}

month = input("Enter the month:")

print(months_and_days[month])