#!/usr/bin/env python
	
from Sieve import Sieve

def solve():
	sieve = Sieve()
	composites = (i for i in range(0, 1000000) if not sieve.is_prime(i))

	for i in composites:
		print i

	print "Problem 4: %d" % answer

if __name__ == '__main__':
	solve()