#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jan 20 18:03:31 2021

@author: Hendrik
"""
import numpy as np

class Category:

    def __init__(self,cat_name):
        self.cat_name = cat_name
        self.balance = 0.0
        self.ledger = []
        
    
    # deposit 
    def deposit(self,amount, description=''):
        self.balance = self.balance + amount
        self.ledger.append({"amount": amount,"description": description})
    
    # withdraw
    def withdraw(self,amount, description=''):
        if self.checkfunds(amount) == True:
            self.balance = self.balance - amount
            self.ledger.append({"amount":-amount,"description":description})
            return True
        else:
            return False
        
    # get balance
    def get_balance(self):
        return self.balance

    def transfer(self,amount, toCateg):
        if self.checkfunds(amount) == True:
            self.balance = self.balance - amount
            self.ledger.append({"amount":-amount,"description":"Transfer to " + toCateg.cat_name})
            toCateg.balance = toCateg.balance + amount
            toCateg.ledger.append({"amount":amount,"description":"Transfer from " + self.cat_name})
            return True
        else:
            return False
            
    def checkfunds(self,amount):
        if amount > self.balance:
            return False
        else:
            return True
            
    def __repr__(self):
        msg = self.cat_name.center(30,'*') + '\n'
        for i in self.ledger:
            msg  = msg + '{:22s} {:7.2f}'.format(list(i.values())[1],list(i.values())[0]) + '\n'
        msg = msg + 'Total: '+ '{:,.2f}'.format(self.balance)
        return msg
        
def create_spend_chart(categories):
    spend_list = []
    perc_spend_list =[]
    for cat in categories:
        cat_spend = 0
        for i in cat.ledger:
            cat_spend += list(i.values())[0] if list(i.values())[0] < 0 else 0
            print(cat_spend)
        spend_list.append(-cat_spend)
        print(spend_list)
    
    for i in spend_list:
        perc_spend_list.append(round(i/sum(spend_list)*10))
        print(perc_spend_list)
    
    #maxlength formula
    catnames = []
    for i in categories:
        catnames.append(i.cat_name)
    max_length = len(max(catnames,key=len))
    
    
    # leftmost vertical column all vertical columns
    ylabels = ['100|',' 90|',' 80|',' 70|',' 60|',' 50|',' 40|',' 30|',' 20|',' 10|','  0|'] + ['    ']*(max_length+1)
    
    # other columns
    data_lists = []
    for i in range(len(perc_spend_list)):
        lst = (10-perc_spend_list[i])*['   '] + perc_spend_list[i]*[' o '] +[' o ']+['---'] + [' '+j+' ' for j in categories[i].cat_name] + ['   ']*(max_length-len(categories[i].cat_name))
        data_lists.append(lst)
          
    data_lists.insert(0,ylabels)
    output = np.array(data_lists)
    output = np.transpose(output)
    
    # output = np.transpose(np.array(data_lists.insert(ylabels,0)))
    output = '\n'.join(''.join(x for x in y) for y in output)   
                      
    msg = 'Percentage spent by category\n' + output
    
    return msg
