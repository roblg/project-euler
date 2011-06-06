#!/usr/bin/env python

def solve():
	sum_of_squares = reduce(lambda x,y: x + y, (i**2 for i in range(1,101)))
	sum = reduce(lambda x,y: x + y, (i for i in range(1,101)))
	square_of_sums = sum**2
	print "Problem 3: %d" % (square_of_sums - sum_of_squares)

if __name__ == '__main__':
	solve()

