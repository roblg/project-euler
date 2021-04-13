package com.roblg.euler.soln;

import com.roblg.euler.util.FibonacciIterator;

public class Problem2 implements Solution {

    @Override
    public long calculate() {
        FibonacciIterator it = FibonacciIterator.create();

        long sum = 0;
        while (true) {
            long c = it.next();
            if (c > 4e6) {
                break;
            }
            if (c % 2 == 0) {
                sum += c;
            }
        }
        return sum;
    }
}
