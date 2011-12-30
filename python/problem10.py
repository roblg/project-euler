#!/usr/bin/env python

from Sieve import Sieve

upto = 2000000

s = Sieve(upto=2000000)

primes_to_2_mil = (i for i in xrange(2,upto) if s.is_prime(i))

print reduce(lambda x,y: x + y, primes_to_2_mil)