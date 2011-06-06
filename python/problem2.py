#!/usr/bin/env python


def fib_upto(n):
	"""Generate fibonacci numbers up to, but not including, n."""
	i = 1
	j = 1
	while j < n:
		t = i + j
		yield j
		i = j
		j = t

def solve():
	sum = reduce(lambda x,y: x + y, (i for i in fib_upto(4000000) if i % 2 == 0))
	print "Problem 2: %d" % sum

if __name__ == '__main__':
	solve()

