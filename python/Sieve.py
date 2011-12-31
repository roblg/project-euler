
from itertools import ifilter, chain
from math import floor
from collections import deque
from bisect import bisect_left
from functools import partial

def next_or_none(it):
    """
    Attempt to call next() on the given iterator. 
    If there is no next value, return None
    """
    try:
        return it.next()
    except StopIteration:
        return None

# from: http://docs.python.org/library/bisect.html#searching-sorted-lists
def index(a, x):
    'Locate the leftmost value exactly equal to x'
    i = bisect_left(a, x)
    if i != len(a) and a[i] == x:
        return i
    raise ValueError


def not_divisible_by(m, n):
    """
    Return True if n not divisible by m. Parameters
    are reversed from what you might expect to support creating 
    a partial function
    """
    return n % m != 0

# memory-efficient, not-pythonic, but it works (reasonably quickly)
class SieveSlow:
    def __init__(self, upto=2):
        self.primeset = deque([2])
        self.__upto = 2
        self.compute_upto(upto)
        
    def is_prime(self, n):
        if n > self.__upto:
            self.compute_upto(n*2 + 1)
        try:
            index(self.primeset,n)
            return True
        except ValueError:
            return False
            
    def compute_upto(self, n):
        if n > self.__upto:
            # oddly, it's faster to re-compute everything than to
            # start from where we were and go from there
            possibles = deque(i for i in xrange(self.__upto+1, n+1) if i % 2 != 0)
            for p in ifilter(lambda x: x*x <= n, self.primeset):
                for unused in xrange(0,len(possibles)):
                     c = possibles.popleft()
                     if c % p != 0:
                         possibles.append(c)
            temp_nums = deque()
            if len(possibles) > 0:
                p = possibles.popleft()
            while len(possibles) > 0 and p**2 <= n:
                # print p
                self.primeset.append(p)
                for unused in xrange(0, len(possibles)):
                    c = possibles.popleft()
                    if c % p != 0:
                        possibles.append(c)
                p = possibles.popleft()
            # at this point, everything left has to be prime
            self.primeset.extend(possibles)
            self.__upto = n   
           
# fairly pythonic (I think) Sieve imlementation that's faster
# than the non-pythonic version     
class Sieve:
    def __init__(self, upto=2):
        self.primeset = [2]
        self.__upto = 2
        self.compute_upto(upto)
        
    def is_prime(self, n):
        if n > self.__upto:
            self.compute_upto(n*2 + 1)
        try:
            index(self.primeset, n)
            return True
        except ValueError:
            return False
            
    def compute_upto(self, n):
        if n > self.__upto:
            new_possibles = (i for i in xrange(self.__upto+1, n+1) if i % 2 != 0)
            # first, loop over all of our existing primes, and remove any definite
            # non-primes from the possibles
            for cmp_val in ifilter(lambda x: x*x <= n, self.primeset):
                # see comment below about partial() and cmp_val
                new_possibles = ifilter(partial(not_divisible_by,cmp_val), new_possibles)
            
            # at this point we know the first thing in new_possibles is prime (or
            # there isn't anything in new possibles)
            cmp_val = next_or_none(new_possibles)
            while cmp_val is not None and cmp_val**2 <= n:
                #print "Appending: %d" % cmp_val
                self.primeset.append(cmp_val)
    
                # just using cmp_val directly in a lambda causes weird behavior, 
                # because the filter is applied lazily, so the value of cmp_val has changed
                # by the time it's actually used. using partial evalutes cmp_val to create
                # a new function. kind of weird, I've never seen this happen in a language 
                # other than javascript before
                new_possibles = ifilter(partial(not_divisible_by, cmp_val), new_possibles)
                #print "New Possibles: %s" % str(new_possibles)
                cmp_val = next_or_none(new_possibles)
            
            self.primeset.extend(new_possibles)
            
            # if we get here, we should have all the primes up to n
            self.__upto = n
 