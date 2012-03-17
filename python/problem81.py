#!/usr/bin/env python

import os.path

import util

def get_weight(matrix, weight_matrix, row, col):
    if row < 0 or col < 0:
        return None
    if weight_matrix[row][col] is not None:
        return weight_matrix[row][col]

    my_weight = matrix[row][col]
    above = get_weight(matrix, weight_matrix, row-1, col)
    left = get_weight(matrix, weight_matrix, row, col-1)

    if above is not None and left is not None:
        weight_matrix[row][col] = my_weight + min(above, left)
    elif above is not None:
        weight_matrix[row][col] = my_weight + above
    elif left is not None:
        weight_matrix[row][col] = my_weight + left
    else:
        weight_matrix[row][col] = my_weight

    return weight_matrix[row][col]


# row->column order
m_p81 = util.get_matrix_p81_p82(81)
wm_p81 = [[None] * 80 for i in xrange(0,80)] # this does though
print "Solution #81: %d" % get_weight(m_p81, wm_p81, 79, 79)
