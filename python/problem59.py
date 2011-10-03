#!/usr/bin/env python
import re


def possible_chars():
	a_val = ord('a')
	current = 0
	while current <= (25 * (26**2) + 25 * (26**1) + 25):
		yield [a_val + ((current / 26**2) % 26), a_val + ((current / 26) % 26), a_val + (current % 26)]
		current = current + 1

# add characters to this and retry until the number of results is reasonable
punc_chars = re.compile("[*${}&~><\"%#=|\\+`]")

in_file = open('input/problem59.txt', 'r')
data = in_file.read()
data = data.split(',')
data = map(lambda (x): int(x), data)
for key in possible_chars():
	key_s = ''.join(map(lambda (x): chr(x), key))
	#print key_s
	result = []
	# skip = False
	for d_idx in range(0, len(data)):
		val = data[d_idx] ^ key[d_idx % 3]
		result.append(val)
	final = ''.join(map(lambda (x): chr(x), result[0:60]))
	if punc_chars.search(final) is None:
		print key_s + ": " + final
	if key_s == 'god':
		# found this on a previous run, now we're going to sum with it
		print "Result: " + str(reduce(lambda x,y: x + y, result))
		break

