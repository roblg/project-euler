#!/usr/bin/env ruby

class FibGenerator
  
  
  def initialize
    @i = 0
    @j = 1
  end
  
  def get_next
    result = @j
    t = @j + @i
    @i = @j
    @j = t
    return result
  end
  
  
end

f = FibGenerator.new

1.upto(12) { |x| puts f.get_next }