#!/usr/bin/env python

def pentagonal(i):
	return i * (3 * i - 1) / 2

def solve():
	pents = set(pentagonal(i) for i in range(1,10000))
	print sorted(list(pents))[0:20]
	opts = []
	
	# mmm... brute-force
	for x in pents:
		for y in pents:
			if x != y and ((x + y) in pents) and (abs(x - y) in pents):
				opts.append((abs(y-x),x,y))
	
	opts = sorted(opts, key=lambda i: i[0])
	print opts[0]
	

if __name__ == '__main__':
	solve()

