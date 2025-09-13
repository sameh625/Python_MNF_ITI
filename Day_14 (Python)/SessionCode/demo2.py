# salary = int(input("Enter your salary: "))

# if salary >0:


#     if salary < 5000:
#         print("Your salary is not enough")
#     elif  salary >= 5000 and salary < 10000:
#         print("your salary is enough")

#     elif salary > 10000:
#         print("your salary is good")
#     else:
#         print("your salary is not enough")
# else:
#     print("Enter invalid salary")

######################################################
#match case

# command = input("Enter command: ").strip().lower()


# help= """1-start - to start the car
# 2-stop - to stop the car
# """

# match command:
#     case "start":
#         print("car started...")
#     case "stop":
#         print("car stopped...")
#     case "help":
#         print(help)
#     case _:
#         print("invalid command")


######################################################
#Loops ===> for , while

# # 1-10 
# # sum=0
# # for number in range(1,11):
# #     # sum+=number
# #     if number%2==0:
# #        if number%4==0:
# #           print(number)

# # word="python"
# # for letter in word:
# #     print(letter)

# # 0-0
# # 0-1
# # 0-2
# #1-0
# #1-1
# #1-2

# # for i in range(3):
# #     for j in range(3):
# #         print(i,j)


# # while loop ==> condation true

# # counter=0
# # sum=0
# # while counter<=10:
# #     counter+=1
# #     if counter%2==0:
# #         sum+=counter

# # print(sum)

# # count = 0

# # while count < 10:
# #     count +=1
# #     if count == 5:
# #         continue
# #     if count == 8:
# #         break
# #     print(count)
    


# password=""
# while password != "12345":
#     password=input("Enter your password: ").strip()
#     if password == "12345":
#         print("Correct password....")
#     else:
#         print("Wrong password")


# Data structures in Python
# list, tuple, set, dictionary 

#--list    0 1 2 3 4
# numbers = [1,2,3,4,5]
# print(numbers)
# for number in numbers:
#     # print(number)
#accessing elements
# print(numbers[0])
# print(numbers[1])
# print(numbers[-1])

# slicing
# print(numbers[-4:])
#     012345 
# word="python"
# print(word[:5])

# lists methods
# fruits.append("grape")
# fruits.insert(3,"grape")
# fruits.count("kiwi")
# fruits2 = fruits.copy()
# fruits.remove("kiwi")
# fruits.clear()
# fruits.pop()
# fruits.sort(reverse=True)
# for fruit in fruits:
#     if fruit == "cherry":
#         break
#     print(fruit)

# new_fruits=[]

# for fruit in fruits:
#     if not fruit.startswith("m"):
#         new_fruits.append(fruit)   
# print(new_fruits)


# fruits = ["apple","banana","cherry","orange","kiwi","melon","mango"]

 
# new_fruits =[fruit for fruit in fruits if not fruit.startswith("m")]
# print(new_fruits)

##############################
#Dictionary
#Accessing elements
# print(car["name"])
# print(car["model"])
# print(car["year"])
#get()
#car.get("years",'not found')


#Updating elements
# car["year"]=2021
# car["color"]="red"
# car.update({"name":"Ford"})


# Deleting
# car.pop("year") based on key
# car.popitem() based on last item
# del car["name"] based on key
# car.clear() all items


#loops
# 1-
# for key in car:
#     print(key,":",car[key])

# 2-
# for value  in car.values():
#     print(value)




#  ("name","bmw")
# for key , value in car.items():
    
#     print(f"{key} : {value}")

# String foramting
# string ==> %s
# integer ==> %d
#float ==> %f
# bool ==> %r
#print("Your name is {} and your age is {}".format(name,age))
# print(f"Your name is {name} and your age is {age}")


# students={
#     "student1":{
#         "name":"Ali",
#         "age":20,
#         "year":2020
#     },
#     "student2":{
#         "name":"Ahmed",
#         "age":21,
#         "year":2021
#     },
#     "student3":{
#         "name":"Mona",
#         "age":22,
#         "year":2022
#     },
#     # "classes":["A","B","C"]
# }
# for k , v in students.items():
#     print(k)
#     for key , value in v.items():
#         print(f"{key} : {value}")




# car={
#     "name":"BMW",
#     "year":2020,
#     "model":"X5",
# }


# person = dict(name="ali",age=20,year=2020)

# print(person)


#Set

# list_fruits = ["apple","banana","cherry","apple","banana"]

# # new_list = list(set(list_fruits))
# fruits = {"apple","banana","cherry","apple","banana"}

# # fruits.add("orange")
# # # fruits.remove("cherry")
# # fruits.discard("cherry")

# # fruits.pop()
# fruits.clear()
# print(fruits)
# for i in fruits :

#     print(i)


# a = {1,2,3,4,5}
# b = {4,5,6,7,8}
# a.union(b)
# print(a )


#tuple

# fruits = ("apple","banana","cherry",1,2.3,True,"apple","banana")

# print(fruits.index("banana"))