
# Generates Fibonacci numbers, starting with 1, 1
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
