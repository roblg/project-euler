#!/usr/bin/env ruby

require 'date'

first_sundays = []

(1901..2000).each {
  |y|
  (1..12).each {
    |m|
    
    d = Date.new(y,m,1)
    if d.wday == 0 then
      first_sundays.push(d)
    end
  }
}

print "Problem 19: ", first_sundays.size, "\n"