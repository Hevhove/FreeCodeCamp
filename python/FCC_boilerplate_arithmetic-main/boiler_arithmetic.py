# -*- coding: utf-8 -*-
"""
Created on Fri Jan  8 10:53:51 2021

@author: hevhove
"""

def arithmetic_arranger(problem_list,answerDisplay=True):
    
    # display all possible errors
    if len(problem_list) > 5:
        return print("Error: Too many problems.")        
                
    for i in problem_list:
        s = i.split()
        if s[1] != '+' and s[1] != '-':
            return print("Error: Operator must be \'+\' or \'-'\.")
        try:
            int(s[0]) + int(s[2])
        except:
            return print("Error: Numbers must only contain digits.")
        if len(s[0]) > 4 or len(s[2]) > 4:
            return print("Error: Numbers can not be more than 4 digits")
        
    # build empty list to display later
    firstrow = []
    secondrow = []
    answers = []
    dashlist = []
    
    for i in problem_list:
        s = i.split()
        no1 = s[0]
        no2 = s[2]
        
        lengthdiff = abs(len(s[0]) - len(s[2]))
        if len(s[0]) < len(s[2]):
            s[0] = str(lengthdiff*' ' + s[0])
        if len(s[0]) > len(s[2]):
            s[2] = str(lengthdiff*' ' + s[2])
        
        firstrow.append('  ' + s[0]+4*' ')
        secondrow.append(s[1] + ' ' + s[2]+4*' ')
        
        dashes = '-'*len('  ' + s[0]) + 4*' '
        dashlist.append(str(dashes))
        
        if s[1] == '+':
            answer =  str(int(no1) + int(no2))
        else:
            answer = str(int(no1) - int(no2)) 
        answerout = ' '*(len('  ' + s[0]) - len(answer)) + answer + 4*' '
        answers.append(answerout)
        
    #print(*firstrow)
    #print(*secondrow)
    #print(*dashlist)
    if answerDisplay == True:
        return " ".join(str(x) for x in firstrow) +'\n'+ " ".join(str(x) for x in secondrow) +'\n'+ " ".join(str(x) for x in dashlist) + '\n'+ " ".join(str(x) for x in answers)
    else:
        return " ".join(str(x) for x in firstrow) +'\n'+ " ".join(str(x) for x in secondrow) +'\n'+ " ".join(str(x) for x in dashlist) + '\n'
    
# main function call 
if __name__ == "__main__":
    print(arithmetic_arranger(["3 + 855", "3801 - 2", "45 + 43", "123 + 49"],True))