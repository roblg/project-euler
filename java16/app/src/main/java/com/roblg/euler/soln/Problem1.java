package com.roblg.euler.soln;

import java.util.stream.IntStream;

public class Problem1 implements Solution {

    @Override
    public long calculate() {
        return IntStream.range(1, 1000)
                .filter(i -> i % 3 == 0 || i % 5 == 0)
                .summaryStatistics()
                .getSum();
    }
}
