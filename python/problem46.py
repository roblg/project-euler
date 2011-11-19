#!/usr/bin/env python
	
from Sieve import Sieve

def counter(start=0):
    i = start
    while True:
        yield i
        i = i + 1

def problem46():
    s = Sieve()
    odd_composites = (i for i in counter(2) if not s.is_prime(i) and i % 2 == 1)
    for c in odd_composites:
        print "c = %d" % c
        two_times_squares = (2 * j**2 for j in counter(1))
        for tts in two_times_squares:
            if s.is_prime(c - tts):
                break
            elif tts > c:
                # this should mean that we couldn't find a sum of a prime and twice a square
                print "{c = %d, tts = %d, c-tts = %d}" % (c, tts, c-tts)
                return c
            
print problem46()
