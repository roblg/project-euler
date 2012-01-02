#!/usr/bin/env python

from fractions import Fraction
from collections import deque

frac_exp = deque([2])

# first, calculate the values in the 
for i in xrange(1, 100):
    if (i + 1) % 3 == 0: 
        frac_exp.append(2 * (i + 1) / 3)
    else:
        frac_exp.append(1)

# then, solve the expansion. compute it backward to avoid
# recursion
t = frac_exp.pop()
while len(frac_exp) > 0:
    inv = Fraction(1, t)
    t = frac_exp.pop() + inv

digits = [int(d_str) for d_str in str(t.numerator)]

print "Solution: %d" % sum(digits)
        
    