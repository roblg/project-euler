#!/usr/bin/env ruby

@@triangle_numbers = {}
@@pentagonal_numbers = {}
@@hexagonal_numbers = {}

def triangle_number(n)
  return n * (n + 1) / 2
end

def pentagonal_number(n)
  return n * (3 * n - 1) / 2
end

def hexagonal_number(n)
  return n * (2 * n - 1)
end

for i in (1..500000)
  @@pentagonal_numbers[pentagonal_number(i)] = true
  @@hexagonal_numbers[hexagonal_number(i)] = true
end

for i in (286...500000)
  num = triangle_number(i)
  
  if @@pentagonal_numbers[num] and @@hexagonal_numbers[num] then
    puts "Problem 45: " + num.to_s
    break
  end
end
