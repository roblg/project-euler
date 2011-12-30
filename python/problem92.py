#!/usr/bin/env python

from itertools import ifilter

def next_num(n):
    digits = (int(d) for d in str(n))
    return reduce(lambda acc,x: acc + x**2, digits, 0)


# solve using a cache of which numbers resolve to 89 and which to 1
# this doesn't work - too slow / memory hog
def solve1():
    resolves_to = {89:89, 1:1} # a map from int -> int that says what each num resolves to
    for n in xrange(1,10**7):
        if n in resolves_to:
            continue
        chain = [n]
        c = next_num(n)
        # we know that every number resolves to 1 or 89, which are pre-populated
        # in the resolves_to map, so this should be guaranteed to terminate
        while c not in resolves_to:
            chain.append(c)
            c = next_num(c)
        # once we're out of the loop, we know that c
        # contains an entry in resolves_to. We should make
        # every other number we've seen also resolve_to that value
        for chain_val in chain:
            resolves_to[chain_val] = resolves_to[c]
    # filter out vals greater than 10mln
    lt_10mln = ifilter(lambda x: x[0] < 10**7, resolves_to.iteritems())
    soln = reduce(lambda acc,a: acc + 1 if a[1] == 89 else acc, lt_10mln, 0)
    print soln

# no caching - just brute-force computing. Still kinda slow
# doesn't work, too slow
def solve2():
    count = 0
    for n in xrange(1, 10**7):
        if n % 10000 == 0:
            print n
        c = n
        while c != 1 and c != 89:
            c = next_num(c)
        if c == 89:
            count+=1

# compute the cache key for a given int 'n'
def cache_key(n):
    return ''.join(sorted(str(n).replace('0','')))

# solve using a cache of which numbers resolve to 89 and which to 1. This
# cache is different than solve1 in that it's storing a 'hash' of the number
# instead of the number itself, which should result in much more efficient
# storage
def solve3():
    # a map from 'classes' of integers (sorted digits, with no zeros)
    # to which number they map to
    seen = set([1,89])
    resolves_to_89 = 1
    resolves_to = {'89':89, '1':1}
    for n in xrange(10**7-1,0,-1):
        chain = []
        c = n
        # we know that every number resolves to 1 or 89, which are pre-populated
        # in the resolves_to map, so this should be guaranteed to terminate
        while cache_key(c) not in resolves_to:
            chain.append(c)
            c = next_num(c)
        # once we're out of the loop, we know that c
        # contains an entry in resolves_to. We should make
        # every other number we've seen also resolves_to that value.
        # if len(chain) == 0, it means that we've already seen that number
        # before (perhaps in a different chain)
        if len(chain) > 0:
            cc_of_c = cache_key(c)
            if resolves_to[cc_of_c] == 89:
                resolves_to_89 += len(chain)
            for chain_val in chain:
                resolves_to[cache_key(chain_val)] = resolves_to[cc_of_c]
                seen.add(chain_val)
        elif n not in seen:
            # we found something in resolves_to that we haven't
            # actually seen yet. add it to seen, and then if
            # it resolves to 89, increment that
            seen.add(n)
            if resolves_to[cache_key(n)] == 89:
                resolves_to_89 += 1
                
    print resolves_to_89


if __name__ == '__main__':
    solve3()