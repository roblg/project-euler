package projecteuler;

import java.util.Collections;
import java.util.List;
import java.util.ArrayList;
import org.apache.commons.collections.comparators.ReverseComparator;

public class Problem7 {

	public static void main(String[] args) {

		List<Long> primes = new ArrayList<Long>();
		long test = 2;
		while(primes.size() < 10001) {
			if (isPrime(test)) {
				primes.add(test);
			}
			test ++;
		}

		Collections.sort(primes, new ReverseComparator());
		System.out.println(primes.toString());
	}

	private static boolean isPrime(long n) {
		for (long i = 2; i * i <= n; i++) {
			if (n % i == 0) {
				return false;
			}
		}
		return true;
	}

}
