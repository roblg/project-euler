#!/usr/bin/env ruby

@@currency = [200, 100, 50, 20, 10, 5, 2, 1]

def num_ways(n, old_i)
  if n < 0 then
    return 0
  elsif n == 0 or n == 1 then
    return 1
  else
    num_ways = 0
    for i in @@currency
      if i <= old_i then
        num_ways += num_ways(n - i, i)
      end
    end
    return num_ways
  end
end

print "Problem 31: ", num_ways(200, 200), "\n"
