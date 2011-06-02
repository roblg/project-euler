#!/usr/bin/env ruby

require_relative 'util/sieve'

sieve = Sieve.new

primes_temp = sieve.primes_upto(100000)
@@primes = [].fill(false, 0..100000)
primes_temp.each {
  |p|
  @@primes[p] = true
}

def compute(n, a, b)
    n ** 2 + (a * n) + b
end

def prime_list(a, b)
  n = -1
  v = 0
  begin
    n = n + 1
    v = compute(n, a, b)
  end while @@primes[v]
  if v > 100000 then
    raise Exception.new("Need more primes!")
  end
  return n
end

b_values = sieve.primes_upto(999)

best_length = 40
best_a = 1
best_b = 41

-999.upto(999) {
  |a|
  b_values.each {
    |b|
    length = prime_list(a,b)
    if length > best_length then
      # print "New winner: ", a, ",", b, ",", length, "\n"
      best_length = length
      best_a = a
      best_b = b
    end
  }
}

print "Problem 27: ", (best_a * best_b), "\n"

