package com.roblg.euler.util;

import java.util.LinkedList;
import java.util.List;

public class NumberUtil {

    public static LinkedList<Long> primeFactors(long target) {
        long sqrtPlus = (long)(Math.floor(Math.sqrt(Long.valueOf(target))) + 1);

        PrimeIterator it = PrimeIterator.upTo(sqrtPlus);

        LinkedList<Long> factors = new LinkedList<>();
        double remaining = Long.valueOf(target).doubleValue();
        while (remaining > 1) {
            long prime = it.next();
            while (remaining % prime == 0) {
                factors.add(prime);
                remaining = remaining / prime;
            }
        }
        return factors;
    }



}
