#!/usr/bin/env ruby

require_relative 'fibgenerator'

f = FibGenerator.new

i = 0 
v = 0 
begin
  i = i + 1
  v = f.get_next
end while v.to_s.length != 1000


puts v
puts i