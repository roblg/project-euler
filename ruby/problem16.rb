#!/usr/bin/env ruby

v = 2**1000

sum = 0
v.to_s.each_char { 
  |c|
  sum = sum + (c.ord - ?0.ord)
}

print "Problem 16: ", sum, "\n"