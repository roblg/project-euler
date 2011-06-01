#!/usr/bin/env ruby

@@memo = {}

def get_chain_size(start)
  if @@memo[start] != nil then
    return @@memo[start]
  end
  
  result = Array.new
  length = 0
  i = start
  while (i > 1)
    if @@memo[i] != nil then
      return length + @@memo[i]
    end
    
    length = length + 1
#    result.push(i)
    if i % 2 == 0 then
      i = i / 2
    else
      i = 3 * i + 1
    end
    
  end
  #result.push(1)
  
  @@memo[start] = length + 1
  
  return length + 1
end

max_length_start = 1
max_length = 1

1000000.times {
  |i|
  
  chain_size = get_chain_size(i)
  if chain_size > max_length then
    max_length = chain_size
    max_length_start = i
  end
  puts i
}

puts "Max length: " + max_length.to_s
puts "Max length start:" + max_length_start.to_s