# #Creating class and objects


# #####Constructor $ destructor
# # class Car:
    
# #     def __init__(self,model,year,color):
# #         self.model = model
# #         self.year = year
# #         self.color = color
# #         print("object created")
    

# #     def car_start(self):
# #         return "car started"
    
# #     def __del__(self):
# #         print("object deleted")

# # car1 = Car("x5",2020,"red")

# # print(car1.car_start())

# #####Attribute
# #attribute in instance & in class attribute & dynamic attribute

# class Student:
#     branch_name= "minufia"  #class attribute
#     num_of_student=0
#     def __init__(self,name,age):
#         self.name=name  #instance attribute
#         self.age=age
#         Student.num_of_student +=1

    
# stu1 = Student("ali",23)
# stu2 = Student("adm",25)
# stu3 = Student("adm",25)
# stu1.email = "ali@gmail.com"
# print(stu1.email) # pass
# print(stu2.email) #error




#Encapsulation 
# public ==> every one
# protected ==> inside class and children , instance
# private ===> inside class only


#public
# class Student:
#     def __init__(self,name,age):
#         self.name=name  #public
#         self.age=age

# st1 = Student("ali",23)
# print(st1.name)
# print(st1.age)

#protected
# class Student:
#     def __init__(self,name,age):
#         self._name=name  
#         self.age=age

# st1 = Student("ali",23)
# print(st1._name)
# st1._name = "ahmed"
# print(st1._name)
# print(st1.age)

#private
# class Student:
#     def __init__(self,name,age):
#         self.name=name  
#         self.__age=age

# st1 = Student("ali",23)
# print(st1.name)
# print(st1._Student__age)


####Setter & Getter

# class Student:
#     def __init__(self,name,age):
#         self.name=name  
#         self.___age=age
   
#     @property
#     def age(self):
#         return self.___age
#     @age.setter
#     def age(self,new_age):
#         self.___age= new_age

# st1 = Student("ali",23)
# print(st1.age)
# st1.age=25
# print(st1.age)


##Staticmethod & classmethod

#normal method
# class Student:
    # def __init__(self,name,age):
    #     self.name=name  
    #     self.age=age
    
    # def show_info(self): #instance method
    #     return f"Studnet: {self.name} age : {self.age}"
    



#StaticMethod
# class Student:
    # def __init__(self,name,age,grade):
    #     self.name=name  
    #     self.age=age
    #     self.grade=grade
    
    # @staticmethod
    # def show_info(name,age):
    #     return f"Studnet: {name} age : {age}"
    # def show(self):
    #     return Student.show_info(self.name,self.age)

  

#class method

# class Student:
#     branch="ITI_minufia"
#     def __init__(self,name,age):
#         self.name=name  
#         self.age=age
    
#     @classmethod
#     def change_branch(cls,new_name):
#         cls.branch=new_name
    
# st1= Student("ali",23)
# Student.change_branch("ItI_smart")
# print(Student.branch)


#inheritance

#single 

# class Person:
#     def __init__(self,name,age):
#         self.name = name
#         self.age=age

#     def show_info(self):
#         return f"Name: {self.name} Age: {self.age}"

# class Student(Person):
#     def __init__(self,name,age):
#         super().__init__(name,age)

#     #override
#     def show_info(self):
#         return f"Student name ==> {self.name} age : {self.age}"

# st1= Student("ali",23)
# print(st1.name)
# print(st1.age)
# print(st1.show_info())
   


##multiple inheritance

# class A:
#     def method_A(self):
#         print("method A")


# class B:
#     def method_B(self):
#         print("method B")

# class C(B,A):
#    ...

# c=C()
# c.method()
# # c.method()


# class A:
#     def method(self):
#         print("method A")


# class B:
#     def method(self):
#         print("method B")

# class C(B,A):
#    ...

# c=C()
# c.method()
# # c.method() Mro ==> (method resolution order)

