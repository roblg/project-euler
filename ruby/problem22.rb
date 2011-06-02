#!/usr/bin/env ruby

file = File.new("input/problem22.txt", "r")
line = file.gets.chomp.chop
line = line[1,line.length-1]

names = line.split("\",\"")

names.sort!

sum = 0
names.each_with_index {
  |name, i|
  name_score = 0
  name.each_char { |c| name_score = name_score + (c.ord - ?A.ord + 1) }
  sum = sum + (name_score * (i + 1))
}

print "Problem 22: ", sum.to_s, "\n"