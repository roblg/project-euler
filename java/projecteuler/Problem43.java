package projecteuler;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import projecteuler.permutationiterator.PermutationIterator;

public class Problem43 {

	public static void main(String[] args) {
		
		PermutationIterator it = new PermutationIterator("0123456789");
		
		final Integer[] divisors = new Integer[] { 2, 3, 5, 7, 11, 13, 17 };
		
		List<String> pandigitals = new ArrayList<String>();
		outer: while (it.hasNext()) {
			String pandigital = it.next();
			for (int i = 1 ; i <= 7; i++) {
				BigDecimal b = new BigDecimal(pandigital.substring(i, i+3));
				BigDecimal[] result = b.divideAndRemainder(BigDecimal.valueOf(divisors[i-1]));
				if (!result[1].equals(BigDecimal.ZERO)) {
					continue outer;
				}
				
			}
			pandigitals.add(pandigital);
		}
		
		System.out.println(pandigitals.size());
		BigInteger sum = BigInteger.ZERO;
		for (String p : pandigitals) {
			sum = sum.add(new BigInteger(p));
		}
		System.out.println(sum.toString());
	}
	
}
