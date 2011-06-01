#!/usr/bin/env ruby

def get_triangle_number(n)
  (n * (n + 1)) / 2
end

def num_divisors(n)
  num_divisors = 0
  i = 1
  while i * i <= n do
    if n % i == 0 then
      num_divisors += 2
    end
    i += 1
  end
  return num_divisors
end

#p num_divisors(get_triangle_number(100000))



# n ^ 2 + n = x

a = 1
b = 1
c = -(2 * (1..500).inject(1) { |x, y| x * y })

min_n = (-b + (b*b - (4 * a * c))) / 2

p num_divisors(min_n)

#sum = 0
#i = 1
#while sum < min_n do
#  sum += i
#end 
#puts i