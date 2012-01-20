
from collections import OrderedDict
from util import get_input_file

numeral_values = OrderedDict([
    ('M',  1000),
    ('CM',  900),
    ('D',   500),
    ('CD',  400),
    ('C',   100),
    ('XC',  90),
    ('L',   50),
    ('XL',  40),
    ('X',   10),
    ('IX',   9),
    ('V',    5),
    ('IV',   4),
    ('I',    1),
])

def get_val(numeral):
    return numeral_values[numeral]

def get_numeral_value(roman_numeral):
    if len(roman_numeral) == 1:
        return get_val(roman_numeral)
    val = 0
    i = 0
    while i < len(roman_numeral) - 1:
        c_val = get_val(roman_numeral[i])
        next_val = get_val(roman_numeral[i+1])
        if c_val >= next_val:
            # this is not a subtractive pair
            val += c_val
            i += 1
        else:
            # this is a subtractive pair
            val += (next_val - c_val)
            i += 2
    rn_len = len(roman_numeral)
    if get_val(roman_numeral[rn_len-2]) >= get_val(roman_numeral[rn_len-1]):
        # the last two characters do *not* represent a subtractive pair.
        # this means the last character wasn't added. so we should add it now
        val += get_val(roman_numeral[rn_len-1])
    return val

def to_roman_numeral(n):
    result = []
    remaining = n
    for k in numeral_values.keys():
        v = get_val(k)
        while remaining / v > 0:
            result.append(k)
            remaining -= v
    return ''.join(result)

def reduce_numeral(roman_numeral):
    val = get_numeral_value(roman_numeral)
    # print val, roman_numeral
    return to_roman_numeral(val)

def solve(romans):
    num_lines_saved = 0
    for r in romans:
        num_lines_saved += (len(r) - len(reduce_numeral(r)))
    return num_lines_saved
    
if __name__ == '__main__':
    romans = []
    for line in get_input_file(89):
        romans.append(line.rstrip())
    print "Solution: %d" % solve(romans)

