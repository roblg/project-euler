package com.roblg.euler.util;

import java.util.Iterator;

public class FibonacciIterator implements Iterator<Long> {
    private long i = 1;
    private long j = 1;

    private FibonacciIterator() {}

    public static FibonacciIterator create() {
        return new FibonacciIterator();
    }

    @Override
    public boolean hasNext() {
        return true;
    }

    @Override
    public Long next() {
        long t = i + j;
        i = j;
        j = t;
        return i;
    }
}
