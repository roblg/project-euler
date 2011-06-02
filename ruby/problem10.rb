#!/usr/bin/env ruby

require_relative 'util/sieve'

s = Sieve.new
primes = s.primes_upto(2_000_000)

print "Problem 10: ", primes.inject(0) { |acc, n| acc + n }, "\n"
