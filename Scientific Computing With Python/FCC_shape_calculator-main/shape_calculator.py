# -*- coding: utf-8 -*-
"""
Created on Fri Jan 22 15:45:48 2021

@author: hevhove
"""

# shape calculator

import math

class Rectangle:
    
    def __init__(self,width,height):
        self.width = width
        self.height = height
    
    def set_width(self,width):
        self.width = width
        
    def set_height(self,height):
        self.height = height
        
    def get_area(self):
        return self.width*self.height
    
    def get_perimeter(self):
        return 2*self.width+2*self.height
    
    def get_diagonal(self):
        return (self.width**2 + self.height**2) **(0.5)
    
    def get_picture(self):
        if self.width > 50 or self.height > 50:
            return "Too big for picture"
        else:
            picture = ""
            for i in range(self.height):
                for j in range(self.width):
                    picture += "*"
                picture += "\n"
            return picture
        
    def get_amount_inside(self,shape):
        if shape.width > self.width:
            return 0
        elif shape.height > self.height:
            return 0
        else:
            return math.floor(self.get_area() / shape.get_area())
    
    def __repr__(self):
        return f"Rectangle(width={self.width},height={self.height})"

class Square(Rectangle):
    
    def __init__(self, side):
        Rectangle.__init__(self,side,side)
        
    def set_side(self,side):
        Rectangle.set_width(self,side)
        Rectangle.set_height(self,side)
        
    def set_width(self,width):
        self.side = width
    
    def set_height(self,width):
        self.side = width
        
    def __repr__(self):
        return f"Square(side={self.width})"

rect = Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())
 
sq = Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())
 
rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))

