
from itertools import count

def digit_diffs(n):
    digits = [int(i) for i in str(n)]
    digit_diffs = [digits[j]-digits[j-1] for j in xrange(1,len(digits))]
    return digit_diffs
    
def is_increasing(n):
    return all(map(lambda x: x >= 0, digit_diffs(n)))

def is_decreasing(n):
    return all(map(lambda x: x <= 0, digit_diffs(n)))
    
def is_bouncy(n):
    if n < 100:
        return False
    return not is_increasing(n) and not is_decreasing(n)
    
def solve():
    solution = None
    num_bouncy = 0
    for i in count(1):
        if is_bouncy(i):
            num_bouncy += 1
        print "%0.4f" % (num_bouncy / float(i))
        if num_bouncy / float(i) >= 0.99:
            return i
    return None
    
if __name__ == '__main__':
    print "Solution: %d" % solve()