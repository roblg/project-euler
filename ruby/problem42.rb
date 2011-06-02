#!/usr/bin/env ruby

file = File.new("input/problem42.txt", "r")
line = file.gets.chomp.chop
line = line[1,line.length-1]

words = line.split("\",\"")

def is_triangle_number(n)
  a = 0.5
  b = 0.5
  c = -n.to_f
  
  left = -b / (2 * a)
  right = (((b ** 2) - (4 * a * c)) ** 0.5) / (2 * a)
  
  x1 = left + right
  x2 = left - right
  
  if x1 > 0 then
    return x1 == x1.to_i
  elsif x2 > 0 then
    return x2 == x2.to_i
  else
    return false
  end
  
end

def is_triangle_word(word)
  sum = 0
  word.each_char {
    |c|
    sum = sum + (c.ord - ?A.ord + 1)
  }
  return is_triangle_number(sum)
end

num_words = 0
words.each { 
  |word|
  if is_triangle_word(word) then
    num_words = num_words + 1
  end
}

print "Problem 42: ", num_words.to_s, "\n"