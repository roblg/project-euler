#!/usr/bin/env python

from Sieve import Sieve

from itertools import count
from itertools import product
from itertools import combinations
from itertools import imap

def set_val_at_idxs(in_str, idxs, new_val):
    str_as_lst = [i for i in in_str]
    for i in idxs:
        str_as_lst[i] = new_val
    return ''.join(str_as_lst)

def solve():
    sieve = Sieve()
    sieve.compute_upto(100000) # prime the sieve

    # we're starting with 23 to make life easy
    found_soln = False
    primes = (i for i in count(23) if sieve.is_prime(i))
    digits = ''.join(str(d) for d in range(0,10)) # 0-9
    for p in primes:
        p_str = str(p)
        for i in xrange(1,len(p_str)):
            # combinations of indices into p_str of length i where every value index in
            # p_str has the same character
            idx_combs = (j for j in combinations(xrange(0,len(p_str)), i)
                         if all(imap(lambda x: p_str[x] == p_str[j[0]], j)) and len(j) > 0)
            for comb in idx_combs:
                group_members = set([])
                # we've got all the possible index combinations, so let's try swapping them
                for new_char in digits:
                    test_str = set_val_at_idxs(p_str, comb, new_char)
                    val = int(test_str)
                    if not test_str.startswith('0') and sieve.is_prime(val):
                        group_members.add(val)
                if len(group_members) >= 7:
                    print sorted(group_members)
                if len(group_members) == 8:
                    found_soln = True
                    break;
            if found_soln:
                break
        if found_soln:
            break



        # for all possible replacements of digits...
#        for orig_char,new_char in product(frozenset(p_str), digits):
#            test_str = p_str.replace(orig_char,new_char)
#            val = int(test_str)
            # len()-test is because we don't want to include 0s at the beginning

#        print group_members
#        if len(group_members) == 7:
#            break



if __name__ == '__main__':
    solve()