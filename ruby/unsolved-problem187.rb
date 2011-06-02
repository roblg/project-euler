#!/usr/bin/env ruby

# unsolved

require_relative 'util/sieve'

target = 10**8

s = Sieve.new

primes = s.primes_upto(target)

primes_map = primes.inject({}) { |acc, x| acc[x] = true; acc }

count = 0

for i in 0...primes.length do
  for j in i...primes.length do
    if primes[i] * primes[j] < target then
      puts primes[i] * primes[j]
      count += 1
    end
  end
end

print "Problem 187: ", count, "\n"