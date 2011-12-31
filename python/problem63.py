#!/usr/bin/env python

from itertools import count
from util import num_digits_pow

def solve():
    
    nums = []
    
    for exp in count(1):
        nums_before_this = len(nums)
        base = 1
        
        # skip the initial number (or few numbers)
        # whose number of digits is less than our exponent
        while num_digits_pow(base, exp) < exp:
            base += 1
            
        # now that we've found a base that gives us the
        # same number of digits as our exponent, let's loop
        # and scoop up all the other bases with the same exponent
        # that meet the criteria.
        while num_digits_pow(base, exp) == exp:
            print (base,exp)
            nums.append((base,exp))
            base += 1
        
        # once we get out here, our base gave us a number
        # with a number of digits larger than our exponent, so
        # we should increment the exponent and start again at one
        
        # if we didn't find _any_ numbers at this exponent, 
        # that means we're done. the first number we would have
        # tried was 1**exp, which will always be 1, and the 
        # second was 2**exp. i'm pretty sure it would be easy (for
        # somebody) to prove that if 2**exp has more than exp digits,
        # 2**(exp+1) will *also* have more exp+1 digits. that is left
        # as an exercise to the reader
        
        if len(nums) == nums_before_this:
            break
            
    print "Solution: %d" % len(nums)

if __name__ == '__main__':
    solve()