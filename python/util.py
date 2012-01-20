"""
A collection of functions that will probably be useful in more than one
Project Euler problem
"""

import math

def num_digits(n):
    return 1 + math.floor(math.log10(n))
    
def num_digits_pow(base, exp):
    return 1 + math.floor(exp * math.log10(base))
    
def fib_upto(n):
	"""Generate fibonacci numbers up to, but not including, n."""
	i = 1
	j = 1
	while j < n:
		t = i + j
		yield j
		i = j
		j = t
		
def get_input_file(problem_num):
    import os
    script_dir = os.path.dirname(__file__)
    input_file = os.path.join(script_dir, 'input', 'problem%d.txt' % problem_num)
    return open(input_file)
    