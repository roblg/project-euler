
from fractions import Fraction

from util import num_digits

def root_2_expansion():
    nextval = Fraction(3, 2)
    while True:
        yield nextval
        t = (1 + nextval)
        t = 1 / t
        nextval = t + 1

def solve():
    count = 0
    expansion = root_2_expansion()
    for i in xrange(0,1001):
        e = expansion.next()
        if num_digits(e.numerator) > num_digits(e.denominator):
            count += 1
    print "Solution: %d" % count


if __name__ == '__main__':
    solve()
