#!/usr/bin/env ruby

def get_proper_divisors(n)
  sqrt_n = (n ** 0.5)
  divisors = []
  for i in (1..(sqrt_n.floor))
    if n % i == 0 then
      divisors.push(i)
      if i != 1 and i != sqrt_n then 
        divisors.push(n / i)
      end
    end
  end
  return divisors
end

def sum_of_proper_divisors(n)
  return get_proper_divisors(n).inject(0) { |acc, x| acc + x }
end

@@divisor_array = [0]

for i in (1..28123)
  @@divisor_array.push(sum_of_proper_divisors(i))
end

@@abundant_numbers = []

for i in (1..28123)
  if @@divisor_array[i] > i then
    @@abundant_numbers.push(i)
  end
end

sum_of_two_abundant_numbers = []

for i in @@abundant_numbers
  for j in @@abundant_numbers
    if i + j < 28123 then
      sum_of_two_abundant_numbers[i+j] = true
    end
  end
end

#puts sum_of_two_abundant_numbers.length

sum = 0
for i in (1..sum_of_two_abundant_numbers.length-1)
  if !sum_of_two_abundant_numbers[i] then
    sum += i
  end
end

print "Problem 23: ", sum, "\n"