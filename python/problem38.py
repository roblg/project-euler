#!/usr/bin/env python

# xrange is important here. range() creates a list instead of a generator
one_through_nine = frozenset("123456789")
pandigitals = (i for i in xrange(987654321,123456789,-1) if frozenset(str(i)) == one_through_nine)

def search(num_str, start, n):
    if num_str == '': return True
    start_str = str(start * n)
    return num_str.startswith(start_str) and \
        search(num_str[len(start_str):],start,n+1)

# print search("192384575", 192, 1)

# pandigitals = [192384576]

def problem38():
    for p in pandigitals:
        # print "p = %d" % p
        p_str = str(p)
        for length in xrange(5, 0, -1):
            if search(p_str, int(p_str[:length]), 1):
                return p
    return None

print problem38()

