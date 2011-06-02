#!/usr/bin/env ruby

require_relative 'util/prime_factors'

@@pf = PrimeFactors.new(1000000)

three_back = 0
two_back = 0
one_back = 0

for i in 100000..1000000 do
  num_unique_factors = @@pf.get_num_unique_factors(i)
  
  if num_unique_factors == 4 and one_back == 4 and two_back == 4 and three_back == 4 then
    puts "Final number in sequence:" + i.to_s
    puts "Answer: " + (i - 3).to_s
    break
  end 
  #puts i.to_s + ": " + num_unique_factors.to_s
  
  three_back = two_back
  two_back = one_back
  one_back = num_unique_factors
  
end



