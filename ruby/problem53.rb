#!/usr/bin/env ruby

@@factorials = []
@@factorials[0] = 1;
@@factorials[1] = 1;

for i in (2..100)
  @@factorials[i] = i * @@factorials[i-1]
end

def n_c_r(n, r)
return @@factorials[n] / (@@factorials[r] * @@factorials[n-r])
end

num = 0 
for n in (1..100)
  for r in (1..n)
    if n_c_r(n, r) > 1000000
      num += 1
    end
  end
end

print "Problem 53: ", num, "\n"