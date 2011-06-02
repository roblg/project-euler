#!/usr/bin/env ruby

solutions = Hash.new

for a in 1..1000 do
  for b in a..1000 do
    c = Math.sqrt(a**2 + b**2)
    if c.floor == c then
      c = c.to_i
      # puts "#{a}, #{b}, #{c}"
      if solutions[a + b + c] then
        solutions[a+b+c].push([a,b,c])
      else
        solutions[a+b+c] = [[a,b,c]]
      end
    end
    
  end
end

max_val = 0
max_key = 0

solutions.entries.each {
  |x,y|
  if x < 1000 and y.length > max_val then
    max_key = x
    max_val = y.length
  end
}

print "Problem 39: ", max_key, "\n"

# for p in solutions.keys.sort do
#   if p < 1000 then
#     puts "#{p}: #{solutions[p].length}"
#   end
# end

# puts solutions



#def num_solutions(p)
#  angle_alpha = Math::PI / 4
#  angle_beta = Math::PI / 4
#  
#  b = p / (2 + (1 / Math.cos(angle_alpha)))
#  a = b
#  
#  a = a.floor
#  b = b.ceil
#  
#  for i in 0...a do
#    c = Math.sqrt((a - i)**2 + (b + i)**2)
#    puts (a-i), (b+i), c
#  end
#  
#  
#end

#num_solutions(120)


# p = a + b + c = 2b + c = 2b + (b / cos(alpha)) = (b * (2 + (1 / cos(alpha))))

# b = p / (2 + (1 / cos(alpha))) = p / (2 + (2 / sqrt(2)))

# c^2 = a^2 + b^2

# sin(alpha) = a / c
# cos(alpha) = b / c
# tan(alpha) = a / b

# sin(beta) = b / c
# cos(beta) = a / c
# tan(beta) = b / a

# a = b
# b = tan(beta) * a
# a = tan(alpha) * b
