#!/usr/bin/env python

from math import log10
import os.path

script_dir = os.path.dirname(__file__)
input_file = os.path.join(script_dir, 'input', 'problem99.txt')

max_log_val = None
max_line_num = -1

line_count = 0
for line in open(input_file, 'r'):
    line_count += 1
    base,exp = tuple(int(i) for i in line.split(','))
    log_val = exp * log10(base)
    if max_log_val is None or log_val > max_log_val:
        max_log_val = log_val
        max_line_num = line_count
        
print "Solution: %d" % max_line_num