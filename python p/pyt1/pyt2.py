# 2

# Take input of length and breadth of a rectangle from user and print area of it.
'''
l=int(input("enter the length"))
b=int(input("enter the breadth"))
print("area is:","length*breadth=",l*b)
'''

# Ask user to give two float input for length and breadth of a rectangle and print area type casted to int.
'''
l=input("enter te length")
b=input("enter the breadth")
print(int(float(l)*float(b)))
'''

# Take side of a square from user and print area and perimeter of it.
'''
side=float(input("enter the side"))
print("area is:",side*side)
print("parameter is:",4*side)
'''

# Take name, roll number and field of interest from user and print in the below format :
# Hey, my name is xyz and my roll number is xyz. My field of interest is xyz
'''
name=input("enter the name\t")
roll=input("enter the roll number ")
interest=input("enter the field of interest ")
print("Hey, my name is",name,"and my roll number is",roll,"My field of interest is ",interest )
'''

# Write a program to find square of a number.
# E.g.-
# INPUT : 2        OUTPUT : 4
# INPUT : 5        OUTPUT : 25

num=int(input("enter the numer"))
print(num**2)