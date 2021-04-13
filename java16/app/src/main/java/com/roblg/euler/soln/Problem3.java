package com.roblg.euler.soln;

import com.roblg.euler.util.NumberUtil;

public class Problem3 implements Solution {

    @Override
    public long calculate() {
        return NumberUtil.primeFactors(600851475143l).getLast();
    }
}
