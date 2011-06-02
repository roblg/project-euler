#!/usr/bin/env ruby

def non_trivial_cancellation(num, den)
  
  if (num > den or num == den or num % 10 == 0) then
    return nil
  end
  
  num = num.to_s
  den = den.to_s
  if den[num[0].chr] then
    new_n = num.delete(num[0].chr)
    new_d = den.delete(num[0].chr)
    
    if (num.to_f / den.to_f == new_n.to_f / new_d.to_f) then
      # puts "#{new_n} / #{new_d}"
      return new_n.to_f, new_d.to_f
    end
    
  end
  
  if den[num[1].chr] then
    new_n = num.delete(num[1].chr)
    new_d = den.delete(num[1].chr)
    if (num.to_f / den.to_f == new_n.to_f / new_d.to_f) then
      # puts "#{new_n} / #{new_d}"
      return new_n.to_f, new_d.to_f
    end
  end
  
  return nil
end

num_prod = 1
den_prod = 1

for i in (10..99)
  for j in (10..99)
    cancellation = non_trivial_cancellation(i,j)
    if not cancellation.nil? then
      num_prod *= cancellation[0]
      den_prod *= cancellation[1]
    end
  end
end

print "Problem 33: ", Rational(num_prod, den_prod).denominator, "\n"