#!/usrbin/env ruby 

require_relative 'util/sieve'

def is_circular_prime(n)
  n_len = n.to_s.length
  new_n = n.to_s
  for i in (1..n_len)
    new_n = new_n.slice(1,n_len-1) + new_n[0].chr
    new_n = new_n.to_s
    if !@@prime_test[new_n.to_i] then
      return false
    end
  end
  return true
end

sieve = Sieve.new

primes = sieve.primes_upto(1000000)

@@prime_test = []

# circular primes below 1000000
for i in primes
  @@prime_test[i] = true
end

num_circular_primes = 0

for i in primes
  if is_circular_prime(i) then
    num_circular_primes += 1
  end
end

print "Problem 35: ", num_circular_primes, "\n"