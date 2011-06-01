#!/usr/bin/env ruby

require_relative 'sieve'

s = Sieve.new

do_until = 1000000

primes = s.primes_upto(do_until)

prime_map = {}

for i in primes do
  prime_map[i] = true
end


overall_sum = 0
overall_length = 0

for i in 0...primes.length do
  sum = primes[i]
  for j in (i+1)...primes.length do
    
    sum = sum + primes[j]
    
    if sum > do_until then 
      next
    end
    
    if prime_map.include?(sum) and (j - i + 1) > overall_length then
      puts sum.to_s + " (length: " + (j-i+1).to_s + ")"
      overall_length = j-i + 1
      overall_sum = sum
    end
    
  end
end 
puts
puts "####### Final Output #######"
puts
puts "Sum: " + overall_sum.to_s + ". Length: " + overall_length.to_s
