#!/usr/bin/env python

def solve():
	solution = reduce(lambda x,y: x + y, [i for i in range(1,1000) if i % 3 == 0 or i % 5 == 0])
	print "Problem 1: %s" % solution

if __name__ == '__main__':
	solve()

