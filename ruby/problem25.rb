#!/usr/bin/env ruby

require_relative 'util/fibgenerator'

f = FibGenerator.new

i = 0 
v = 0 
begin
  i = i + 1
  v = f.get_next
end while v.to_s.length != 1000

print "Problem 25: ", i, "\n"