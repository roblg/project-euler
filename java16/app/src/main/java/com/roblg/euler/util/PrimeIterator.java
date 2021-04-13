package com.roblg.euler.util;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.LongStream;

public class PrimeIterator implements Iterator<Long> {

    private final List<Long> primes = new ArrayList();
    private long upTo = 2;
    private int cur = 0;

    private PrimeIterator(long upTo) {
        primes.add(2l);
        this.upTo = this.computeUpTo(upTo);
    }

    public static PrimeIterator create() {
        return upTo(100);
    }

    public static PrimeIterator upTo(long upTo) {
        return new PrimeIterator(upTo);
    }

    private long computeUpTo(long upTo) {
        if (this.upTo >= upTo) {
            return this.upTo;
        }
        if (this.upTo * 2 > upTo) {
            upTo = this.upTo * 2;
        }
        LinkedList<Long> candidates = LongStream.range(this.upTo + 1, upTo)
                .filter(i -> i % 2 == 1)
                .boxed()
                .collect(Collectors.toCollection(LinkedList::new));

        long target = (long)(Math.floor(Math.sqrt(upTo)) + 1);

        // remove all the easy non-primes
        Iterator<Long> candIt = candidates.iterator();
        while (candIt.hasNext()) {
            Long candidate = candIt.next();
            boolean notPrime = primes.stream()
                    .takeWhile(p -> p.doubleValue() <= Math.sqrt(candidate))
                    .anyMatch(p -> candidate % p == 0);
            if (notPrime) {
                candIt.remove();
            }
        }

        if (candidates.isEmpty()) {
            return upTo;
        }

        do {
            long newPrime = candidates.removeFirst();
            primes.add(newPrime);
            // TODO: this could be more performant w/ an Iterator instead of stream
            candidates = candidates.stream()
                    .filter(c -> c % newPrime != 0)
                    .collect(Collectors.toCollection(LinkedList::new));
        } while (!candidates.isEmpty() && candidates.peekFirst() < target);

        while (!candidates.isEmpty()) {
            primes.add(candidates.removeFirst());
        }

        return upTo;
    }

    @Override
    public boolean hasNext() {
        return true;
    }

    @Override
    public Long next() {
        if (cur >= primes.size()) {
            this.upTo = computeUpTo(upTo * 2);
        }
        return primes.get(cur++);
    }
}
