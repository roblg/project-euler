#!/usr/bin/env ruby

def is_palindrome(n)
  return n.to_s == n.to_s.reverse.to_s
end

def is_lychrel(original_n)
  n = original_n
  new_n = n
  50.times do
    new_n = n.to_s.reverse.to_i
    n = n + new_n
    if is_palindrome(n) then
      return false
    end
  end
  return true
end

num = 0
for i in (11...10000)
  if is_lychrel(i) then
    num += 1
  end
end

print "Problem 55: ", num, "\n"