#!/usr/bin/env ruby

class Node
  
  attr_accessor :value
  attr_accessor :left
  attr_accessor :right
  
  def initialize(value, left=nil, right=nil)
    @value = value
    @left = left
    @right = right
  end
  
  def to_s
    return "{v=#{@value},l=" + (self.left ? self.left.to_s : "nil") + ",r=" + (self.right ? self.right.to_s : "nil") + "}"
  end
end


def in_order(node)
  if (node != nil) then
    in_order(node.left)
    print node.value, ","
    in_order(node.right)
  end
end

n = Node.new(3, 
  Node.new(7, 
    Node.new(2, 
      Node.new(8), 
      Node.new(5)), 
    Node.new(4, 
      Node.new(5), 
      Node.new(9))), 
  Node.new(5, 
    Node.new(4, 
      Node.new(5), 
      Node.new(9)), 
    Node.new(6, 
      Node.new(9), 
      Node.new(3)))
)

#in_order(n)
#print "\n"

# YEAH MEMOIZATION!
@@max_hash = Hash.new

def get_max(node)
  if node == nil then return 0 end
  
  if @@max_hash[node] != nil then
    return @@max_hash[node]
  end
    
  v = node.value
  l_m = get_max(node.left)
  r_m = get_max(node.right)
  
  cached_value = v + (l_m > r_m ? l_m : r_m)
  @@max_hash[node] = cached_value
  return cached_value
  
end

## TEST CODE ##

str = []

str[0] = "   3   "
str[1] = "  7 5  "
str[2] = " 2 4 6 "
str[3] = "8 5 9 3"

def to_nodes(strs)
  result = []
  strs.each { |s| result.push(Node.new(s.to_i)) }
  result
end

## TEST CODE ##

def read_triangle(lines)
  rows = []
  lines.each { |s| rows.push(to_nodes(s.strip.split)) }

  rows.each_with_index do 
    |v,i|
    if (i != rows.size - 1) then
      v.each_with_index do
        |node, j|
        node.left = rows[i+1][j]
        node.right = rows[i+1][j+1]
      end
    end
  end
  return rows[0][0]
end

def solve(filename)
  file_data = []
  file = File.new(filename, "r")

  file.each_line do
    |line|
    file_data.push(line.chomp)
  end

  n = read_triangle(file_data)
  return get_max(n)
end

p "Problem 18: " + solve("input/problem18.txt").to_s

p "Problem 67: " + solve("input/problem67.txt").to_s

