#!/usr/bin/env ruby

def sum_of_corners(side_length)
  if (side_length == 1)
    return [1]
  else 
    square = side_length ** 2
    return [square, square - (side_length-1), square-(2*(side_length-1)), square-(3*(side_length-1))]
  end
end


sum = 0
i = 1
while (i <= 1001) do
  sum_of_corners(i).each { |x| sum += x }
  i += 2
end

print "Problem 28: ", sum, "\n"