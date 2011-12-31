#!/usr/bin/env python


from util import fib_upto

def solve():
	sum = reduce(lambda x,y: x + y, (i for i in fib_upto(4000000) if i % 2 == 0))
	print "Problem 2: %d" % sum

if __name__ == '__main__':
	solve()

