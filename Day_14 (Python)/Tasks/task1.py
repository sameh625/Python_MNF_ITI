# 1-Write a program that asks the user for a number and prints
# whether it is: Positive -Negative - Zero

num  = int(input("Enter number please:"))

if num >0:
    print("Positive")
elif num == 0:
    print("Zero")
else:
    print("Negative")