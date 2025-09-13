# 3-Write a program that asks the user to enter a day of the week
# and prints a message:
# • "Start of the week" if Monday
# • "Midweek" if Wednesday
# • "Weekend" if Saturday or Sunday
# • "Normal day" otherwise


day = input("Enter a day:")

match day:
    case "Monday":
        print("Start of the week")
    case "Wednesday":
        print("Midweek")
    case "Saturday" | "Sunday":
        print("Weekend")
    case _:
        print("Normal day")