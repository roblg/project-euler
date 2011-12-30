
from math import floor
from collections import deque

class Sieve:
    def __init__(self, upto=2):
        self.primeset = set([2])
        self.__upto = 2
        self.compute_upto(upto)
    def is_prime(self, n):
        if n > self.__upto:
            self.compute_upto(n*2 + 1)
        return n in self.primeset
    def compute_upto(self, n):
        if n > self.__upto:
            primes = deque(sorted(self.primeset))
            temp_primes = deque()
            primes.extend(i for i in range(self.__upto+1, n+1) if i % 2 != 0)
            cmp_val = primes.popleft()
            temp_primes.append(cmp_val)
            while True:
                # go through all the elements, comparing to cmp_val
                # use range because we're removing things, I guess
                for i in xrange(0, len(primes)):
                    t = primes.popleft()
                    if t % cmp_val != 0:
                        primes.append(t)
                cmp_val = primes.popleft()
                temp_primes.append(cmp_val)
                if cmp_val >= n ** 0.5:
                    temp_primes.extend(primes)
                    self.primeset = set(temp_primes)
                    self.__upto = n
                    break
