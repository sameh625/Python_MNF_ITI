#Function 

# name=input("Enter your name : ").strip()

# def say_hello(user_name):
#     print("Hello {}".format(user_name))

# say_hello(name)


# def add_two_number(number1=0,number2=0):

#     return   number1 + number2

# result = add_two_number()

# print(result)

# def student(name,age):
#     print (f"Name: {name} Age: {age}")

# student(name="ali",age=25)


#*args
# def sum_all_number(*numbers):
#     sum=0
#     for number in numbers:
#         sum+=number

#     return sum

# result=sum_all_number(1,2,3,4,5)

# print(result)



#**kwargs
# def student_info(**info):
    
#     print(info)
#     for key,v in info.items():
#         print(f"{key} : {v}")

# student_info(name="mona",age=24,email="mona@gmail.com",city="cairo",number=2345678)


##########################################################
#Scope ==> local - global
# num1 = 0
# def test():
#     global num1
#     num1 +=1 
#     print(num1)

# print(num1)
# test()
# test()
# test()
# print(num1)

##########################################################
#Docstring
# def add(x,y):

#     """This function return sum of two number"""

#     return x+y

# print(add.__doc__)


##########################################################
#lambda
# square = lambda num1 : num1**2

# print(square(5))
# print(square(4))
# print(square(7))


#File handling , image handling
# 1-open file 
# 2-read from file, write,append
# 3-close file
#File mode
# 1- reading ==> r
# 2- writing ==> w
# 3- appending ==> a


#Reading
# file = open("data.txt","r")
# print(file.readlines())
# file.close()

#writing
# lines=["ahmed\n","ali\n","mona\n"]

# file = open("new_data.txt","w")
# # # file.write("mona")
# # file.write("ali")
# # file.write("ahmed")
# file.writelines(lines)
# file.close()

#appending 

# file = open("data.txt","a")

# file.write("abdo")
# file.close()

#Way2
# with open("data.txt","r") as file:
#     print(file.read())

#reading and write image 
# with open("logo1.png","rb") as file:
#     data = file.read()
#     with open("new_logo.png","wb") as new_image:
#         new_image.write(data)

import csv 

# # #reading 
# # # with open("data.csv","r") as file:
# # #     reader = csv.reader(file)
# # #     for row in reader:
# # #        for col in row:
# # #            print(col)


# # #Writing
# # with open("data.csv","w",newline="") as file:
# #     writer = csv.writer(file)
# #     writer.writerow(["name","age","email"])
# #     writer.writerow(["ali",23,"ali@gmail.com"])
# #     writer.writerow(["adm",24,"adm@gmail.com"])
# #     writer.writerow(["ahmed",25,"ahmed@gmail.com"])
# #     writer.writerow(["mona",50,"mona@gmail.com"])

import os
# import random
# import math
# import datetime

# import json
# #create new dir
# # os.mkdir("newdir")
# #rename file
# # os.rename("logo1.png","new.png")
# #remove file
# # os.remove("new_logo.png")
# #remove dir 
# # os.rmdir("newdir")

# # result = random.randint(1,10)
# # print(result)

# # result = int(random.random()*10)
# # print(result)

# # print(random.randrange(1,10))

# # names = ["ahmed","ali","mona","rana"]
# # result = random.choice(names)

# # print(result)

# # numbers = [1,2,3,4,5,6,7,4,7,6,1,8,9,10]
# # print(random.sample(numbers,5))

# # print(math.pi)
# # print(math.inf)
# # print(math.pow(2,3))
# # print(math.sqrt(25))
# # abs()
# # print(math.factorial(5))

# # print(math.fabs(-100))
# # print(math.ceil(4.3))
# # print(math.floor(4.3))
# # print(math.trunc(4.3))
# # print(math.log10(1000))

# # print(math.sin(90))
# # print(math.cos(90))
# # print(math.tan(90))

# # date
# # print(datetime.date.today().year)
# # print(datetime.date.today().month)
# # print(datetime.date.today().day)

# # time=datetime.datetime.strptime("2025-09-01 14:30:00","%Y-%m-%d %H:%M:%S")
# # print(time)

# # birthdate = datetime.date(2000,5,10)
# # today= datetime.date.today()

# # age = today.year - birthdate.year
# # print(age)


# user ={"name":"ali","age":34,"email":"ali@gmail.com"}
# convert_data_to_json = json.dumps(user)
# print(convert_data_to_json)
# print(type(convert_data_to_json))


#Error handling try, except

# try:
#     num = int(input("Enter an number: "))
#     print(num)
# except Exception as e:
#     print(e)
# else:
#     print("Your appliction success")
# finally:
#     print("Your program is done")

# age = int(input("Enter your age(18+): "))

# if age < 18:
#     raise ValueError("Age can't pass greater than 18 year ")
