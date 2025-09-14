#polymorphism
#in built-in func
# print(len("ali"))
# print(len([1,2,3]))
# print(3+5)
# print("Hello "+ "ali")


# class Cat:

#     def sound(self):
#         return "mewo"
# class Dog:
#     def sound(self):
#         return "wooooo"

# def make_sound(animal):
#     print(animal.sound())

# cat = Cat()

# dog = Dog()

# make_sound(cat)
# make_sound(dog)


##Overriding

# #parent
# class Shape:
#     def area(self):
#         pass
#     def perimeter(self):
#         pass
# #child
# class Circle(Shape):
#     def __init__(self,radius):
#         self.radius=radius
#     def area(self):
#         return self.radius**2*3.14
#     def perimeter(self):
#         return 2*self.radius*3.14

# class Rectangle(Shape):
    
#     def __init__(self,w,h):
#         self.w=w
#         self.h=h
        
#     def area(self):
#         return self.h*self.w



# rect = Rectangle(3,4)
# print(rect.area())

# circle=Circle(5)
# print(circle.area())
# print(circle.perimeter())



# class Math:


#     def add(self,*args):
#         return sum(args)
    
# c = Math()
# print(c.add(3,4))

#Abstraction ==> hide compelextiy


from  abc import ABC , abstractmethod

# #parent
# class Shape(ABC):
#     @abstractmethod
#     def area(self):
#         pass
   
# #child
# class Circle(Shape):
#     def __init__(self,radius):
#         self.radius=radius
#     def area(self):
#         return self.radius**2*3.14
   

# class Rectangle(Shape):
    
#     def __init__(self,w,h):
#         self.w=w
#         self.h=h
        
#     def area(self):
#         return self.h*self.w


# # shape = Shape() ===> error



# rect = Rectangle(3,4)
# print(rect.area())

# circle=Circle(5)
# print(circle.area())
# print(circle.perimeter())


# class Car(ABC):

#     @abstractmethod
#     def show_info(self):
#         """"""
#         pass


# class Ford(Car):
#     ...


# class Payment(ABC):

#     @abstractmethod
#     def pay(self,amount):
#         pass

# class Credit(Payment):
#     def pay(self, amount):
#         print("this from credit",amount)

# credit = Credit()
# credit.pay(100)


##Composition 


# class Engine:
#     def start(self):
#         print("engine started")


# class Car:
#     def __init__(self):
#         self.engine = Engine()

#     def drive(self):
#         self.engine.start()
#         print("car is driving")


# car = Car()
# car.drive()



class Student:
    def __init__(self,name,age):
        self.name=name  
        self.age=age

    def __repr__(self):
        return f"[Student {self.name} age {self.age}]"

st1 = Student("ali",23)
print(st1)