#!/usr/bin/env ruby


#.to_a.inject(0) { |x,y| y + (x[0] - ?0) }
puts ((1..100).inject(1) { |x, y| y * x }).to_s.split(//).inject(0) { |acc, x| acc + (x.ord - ?0.ord) }