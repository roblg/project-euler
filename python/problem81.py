#!/usr/bin/env python

import os.path

script_dir = os.path.dirname(__file__)
input_file = os.path.join(script_dir, 'input', 'problem81.txt')

# row->column order
matrix = []
for line in open(input_file, 'r'):
    vals = [int(v) for v in line.split(',')]
    # print len(filter(lambda x: x < 0, vals))
    matrix.append(vals)

# initialize the weights matrix
# weight_matrix = [[None] * 80] * 80 # this doesn't work like I expected it to...
weight_matrix = [[None] * 80 for i in xrange(0,80)] # this does though

def get_weight(row, col):
    if row < 0 or col < 0:
        return None
    if weight_matrix[row][col] is not None:
        return weight_matrix[row][col]
    
    my_weight = matrix[row][col]
    above = get_weight(row-1, col)
    left = get_weight(row, col-1)
    
    if above is not None and left is not None:
        weight_matrix[row][col] = my_weight + min(above, left)
    elif above is not None:
        weight_matrix[row][col] = my_weight + above
    elif left is not None:
        weight_matrix[row][col] = my_weight + left
    else:
        weight_matrix[row][col] = my_weight
    
    return weight_matrix[row][col]

print "Solution: %d" % get_weight(79, 79)
