#!/usr/bin/env python

from fractions import Fraction

# algorithm: start at 3/7 and start subtracting the smallest
# possible increments


#>>> Fraction(3,7) - Fraction(1,1000000)
#Fraction(2999993, 7000000)
#>>> Fraction(3,7) - Fraction(3,1000000)
#Fraction(2999979, 7000000)
#>>> Fraction(3,7) - Fraction(4,1000000)
#Fraction(749993, 1750000)
#>>> Fraction(3,7) - Fraction(5,1000000)
#Fraction(599993, 1400000)
#>>> Fraction(3,7) - Fraction(6,1000000)
#Fraction(1499979, 3500000)
#>>> Fraction(3,7) - Fraction(7,1000000)
#Fraction(2999951, 7000000)
#>>> Fraction(3,7) - Fraction(8,1000000)
#Fraction(374993, 875000)
#>>> Fraction(3,7) - Fraction(1, 999999)
#Fraction(428570, 999999)
            
print "Solution:", (Fraction(3,7) - Fraction(1, 999999)).numerator