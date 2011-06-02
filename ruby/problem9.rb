#!/usr/bin/env ruby

a = 1
b = 2
c = (1000 - a - b)

1.upto(998) {
  |a|
  a.upto(1000 - a) {
    |b|  
    c = (1000 - a - b)
    # print a, ",", b, ",", c, "\n"
    if (c ** 2 == (a **2 + b ** 2)) then
      print "(a,b,c) = (",a,",",b,",",c,")\n"
      print "Problem 9: ", a * b * c, "\n"
      break
    end
    
  }
}
