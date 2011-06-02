#!/usr/bin/env ruby

def digital_sum(n)
  n_s = n.to_s
  sum = 0
  for i in (0..n_s.length-1)
    sum += n_s[i].chr.to_i
  end
  return sum
end

max_sum = 0

for a in (1..100)
  for b in (1..100)
   d_s = digital_sum(a**b) 
   if (d_s > max_sum) then
     max_sum = d_s
   end
  end
end

print "Problem 56: ", max_sum, "\n"