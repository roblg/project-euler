#!/usr/bin/env ruby

last10 = 0
1.upto(1000) {
  |i|
  last10 = (last10 + (i ** i)) % 10000000000
}
puts last10


# 4629110846700