#!/usr/bin/env ruby

x = 1
for i in (1..7830457) do
  x = (x * 2) % 10000000000
end

#puts x

y = (x * 28433) % 10000000000
#puts y

print "Problem 97: ", y + 1, "\n"