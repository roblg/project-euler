#!/usr/bin/env ruby

stop = 999999999

primes = []

#2.upto(stop) { |x| numbers.push(x) }
numbers = (2..stop).to_a

p = 0
begin
  p = numbers.shift
  primes.push(p)
  temp_numbers = []
  numbers.each {
    |n|
    if n % p != 0 then
      temp_numbers.push(n)
    end
  }
  numbers.clear
  numbers = temp_numbers
end while (p * p <= stop)

numbers.each { |n| primes.push(n) }

puts primes.inject(0) { |acc, n| acc + n }