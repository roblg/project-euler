#!/usr/bin/env python

from Sieve import Sieve

def str_permutations(s):
    lst = ''.join(sorted(s))
    while True:
        yield 

def problem49():
    s = Sieve()
    four_digit_primes = (i for i in xrange(1000, 9999+1) if s.is_prime(i))
    grouped_primes = {}
    for i in four_digit_primes:
        # the key into the map will be a sorted representation of
        # the digits in 'i'
        key = ''.join(sorted(str(i)))
        if not key in grouped_primes:
            # create a list at that key
            grouped_primes[key] = []
        grouped_primes[key].append(i)
    prime_groups_bigger_than_three = (grouped_primes[k] for k in grouped_primes if len(grouped_primes[k]) >= 3)
    for grp in prime_groups_bigger_than_three:
        diff_counts = {}
        pairwise_diffs = [(grp[i],grp[j],grp[j]-grp[i]) for i in xrange(0,len(grp)) for j in xrange(i+1,len(grp))]
        for p1,p2,diff in pairwise_diffs:
            if diff not in diff_counts:
                diff_counts[diff] = 0
            diff_counts[diff]+=1
        solution_diffs = (k for k in diff_counts if diff_counts[k] == 2)
        for s in solution_diffs:
            # there should only be two of these! (one should be the example)
            pairs = filter(lambda x: x[2] == s, pairwise_diffs)
            if pairs[0][1] == pairs[1][0] and pairs[0][0] != 1487:
                return ''.join(map(str, [pairs[0][0], pairs[0][1], pairs[1][1]]))
    return None

print problem49()
