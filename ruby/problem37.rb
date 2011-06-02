#!/usr/bin/env ruby

require_relative 'util/sieve'

sieve = Sieve.new

@@primes_list = sieve.primes_upto(1000000)

@@prime_test = {}
for i in @@primes_list
  @@prime_test[i] = true
end

def left_truncatable(n)
  if n < 10 then
    return false
  end
  n_s = n.to_s
  n_len = n_s.length
  for i in (0..n_s.length-1)
    test = n_s[i,n_len].to_i
    if !@@prime_test[test] then
      return false
    end
  end
  return true
end

def right_truncatable(n)
  if n < 10 then
    return false
  end
  n_s = n.to_s
  n_len = n_s.length
  for i in (0..n_s.length-1)
    test = n_s[0,n_len-i].to_i
    if !@@prime_test[test] then
      return false
    end
  end
  return true
end

prime_count = 0
sum = 0
for prime in @@primes_list
  if left_truncatable(prime) and right_truncatable(prime) then
    # puts prime
    sum += prime
    prime_count += 1
  end
  
  break if prime_count == 11
  
end

if prime_count < 11 then
  puts "failed to find 11 primes"
else
  print "Problem 37: ", sum, "\n"
end