#!/usr/bin/env ruby

i = 125874
while true do
  x = i.to_s.split("").sort.join("")
  x_multiples = []
  x_multiples.push((2*i).to_s.split("").sort.join(""))
  x_multiples.push((3*i).to_s.split("").sort.join(""))
  x_multiples.push((4*i).to_s.split("").sort.join(""))
  x_multiples.push((5*i).to_s.split("").sort.join(""))
  x_multiples.push((6*i).to_s.split("").sort.join(""))
  
  equal = true
  for a in x_multiples
    puts a, x
    if a != x
      equal = false
      break
    end
  end

  if equal then
    puts "Done: " + i.to_s
    break
  end

  puts i.to_s + ": " + equal.to_s

  i+=1

end
