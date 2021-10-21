# -*- coding: utf-8 -*-
"""
Created on Tue Jan 12 17:21:15 2021

@author: hevhove
"""

def add_time(start_time,duration,day=None):
    h_start = int(start_time.split(":")[0])
    m_start = int(start_time.split(":")[1].split()[0])
    ampm_start = start_time.split(":")[1].split()[1]
    
    h_dur = int(duration.split(":")[0])
    m_dur = int(duration.split(":")[1])
    
    try:
        day_start = day.lower().capitalize()
    except:
        day_start = None
    
    if m_start + m_dur < 60:
        m_out = m_start + m_dur
        h1 = h_start + h_dur 
    else:
        m_out = m_start + m_dur - 60
        h1 = h_start + h_dur  + 1
        
    h_out = h1 % 12
    
    # Formatting h_out and m_out back into strings with 0 in front if below 10
    if h_out == 0:
        h_out = "12"
    else:
        h_out = str(h_out)
    
    if m_out < 10:
        m_out = "0" + str(m_out)
    else:
        m_out = str(m_out)
    
    # AM / PM logic
    if (h1 // 12) % 2 == 0 :
        ampm_out = ampm_start
    else:
        if ampm_start == "AM":
            ampm_out = "PM"
        else:
            ampm_out = "AM"
    
    # Days Later Logic
    day_diff = h1 // 24
    
    if ampm_start == "PM" and ampm_out == "AM" and day_diff == 0:
        day_string = " (next day)"
    elif ampm_start == "PM" and ampm_out == "AM" and day_diff != 0:
        day_string = " (" + str(day_diff+1) + " days later)"
    elif day_diff == 1:
        day_string = " (next day)"
    elif day_diff != 0:
        day_string = " (" + str(day_diff) + " days later)"
    else:
        day_string = ""
    
    # Weekday Logic - only needed if weekday is specified
    weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    if day_start in weekdays and ampm_start == "PM" and ampm_out == "AM":
        wday_out = weekdays[(weekdays.index(day_start) + day_diff+1) % 7]
        return h_out + ":" + m_out + " " + ampm_out + ", " + wday_out + day_string 
    elif day_start in weekdays:
        wday_out = weekdays[(weekdays.index(day_start) + day_diff) % 7]
        return h_out + ":" + m_out + " " + ampm_out + ", " + wday_out + day_string
    else:
        return h_out + ":" + m_out + " " + ampm_out + day_string