#!/usr/bin/env ruby

def sum_of_factors(n)
  sum = 0
  i = 2
  while ((i * i) <= n) do
    if (n % i == 0) then
      sum = sum + i
      sum = sum + (n / i)
    end
    i = i + 1
  end
  return sum + 1
end

sums = []

amicable = []

sum = 0

2.upto(9999) do
  |n|
  s = sum_of_factors(n)
  s2 = sum_of_factors(s)
  if (s2 == n and n != s) then
    amicable.push(n)
    sum = sum + n
  end
end

print "Problem 21: ", sum.to_s, "\n"