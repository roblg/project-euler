@@currency = [200, 100, 50, 20, 10, 5, 2, 1]

def num_ways(n, old_i)
  if n < 0 then
    return 0
  elsif n == 0 or n == 1 then
    return 1
  else
    num_ways = 0
    for i in @@currency
      if i <= old_i then
        num_ways += num_ways(n - i, i)
      end
    end
    return num_ways
  end
end

puts num_ways(200, 200)
#puts num_ways(2, 200)
#puts num_ways(3, 200)
#uts num_ways(4, 200)
#puts num_ways(5, 200)

##2, 2
#2, 1, 1
#1, 1, 1, 1
