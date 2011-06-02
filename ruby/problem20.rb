#!/usr/bin/env ruby

print "Problem 20: ", ((1..100).inject(1) { |x, y| y * x }).to_s.split(//).inject(0) { |acc, x| acc + (x.ord - ?0.ord) }, "\n"