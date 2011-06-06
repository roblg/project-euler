#!/usr/bin/env python

def is_prime(n):
	for i in range(2, int(n**0.5) + 1):
		if n % i == 0:
			return False
	return True

def solve():
	target = 600851475143
	prime_factors = []
	i = 3
	while i < (int(target**0.5)+1):
		if target % i == 0 and is_prime(i):
			prime_factors.append(i)
		i += 2

	print "Problem 3: %d" % max(prime_factors)

if __name__ == '__main__':
	solve()
