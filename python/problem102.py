"""
Solve Project Euler Problem 102:
https://projecteuler.net/problem=102

Got some help from the interwebs on this one. 
Glanced at this guy: http://www.blackpawn.com/texts/pointinpoly/default.html
Then read these multiple times:
http://en.wikipedia.org/wiki/Cross_product
http://en.wikipedia.org/wiki/Determinant
http://en.wikipedia.org/wiki/Dot_product
"""

import os
from math import sqrt



script_dir = os.path.dirname(__file__)
input_file = os.path.join(script_dir, 'input', 'problem102.txt')

def det_2x2(m):
    # det(m) = ad - bc
    # | a b | = | m[0][0] m[0][1] |
    # | c d |   | m[1][0] m[1][1] | 
    return m[0][0] * m[1][1] - m[0][1] * m[1][0]
    
def cross_product(a, b):
    i_m = det_2x2(((a[1], 0),
                  (b[1], 0)))
    j_m = det_2x2(((a[0], 0),
                  (b[0], 0)))
    z_m = det_2x2(((a[0], a[1]),
                  (b[0], b[1])))
    return (i_m, -j_m, z_m)

def dot_product(a, b):
    from itertools import imap
    return sum(imap(lambda x,y: x * y, a, b)) 

def sub(i, j):
    return map(lambda x, y: x - y, i, j)

def cross_same_dir(x, y, z, p):
    cp1 = cross_product(sub(z,y), sub(x,y))
    cp2 = cross_product(sub(z,y), sub(p,y))
    
    # this is technically what a dot product would show
    # us, but since we're in 2D, it's either popping out of the screen,
    # or going into it (+z or -z)
    return (cp1[2] > 0 and cp2[2] > 0) or \
           (cp1[2] < 0 and cp2[2] < 0)
    

def contains_origin(triangle):
    p = (0,0)
    a = triangle[0]
    b = triangle[1]
    c = triangle[2]
    return cross_same_dir(a, b, c, p) and \
           cross_same_dir(b, c, a, p) and \
           cross_same_dir(c, a, b, p)
    

def solve():
    triangles = []
    for line in open(input_file):
        vals = [int(x) for x in line.rstrip().split(',')]
        triangles.append(
            ((vals[0], vals[1]),
            (vals[2], vals[3]),
            (vals[4], vals[5]))
        )
    
    return len(filter(contains_origin, triangles))

print "Solution: %d" % solve()