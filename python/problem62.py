
from itertools import count
from collections import defaultdict

def cache_key(n):
    return ''.join(sorted(str(n)))

def solve():
    cubes = defaultdict(list)
    for n in count(1):
        cube = n ** 3
        key = cache_key(cube)
        cubes[key].append(cube)
        if len(cubes[key]) == 5:
            return min(cubes[key])
    
if __name__ == '__main__':
    print "Solution: %d" % solve()