package projecteuler;

import java.math.BigInteger;

import projecteuler.permutationiterator.PermutationIterator;


public class Problem41 {

	public static void main(String[] args) {
		
		for (int i = 1; i <= 9; i++) {
		
			PermutationIterator it = new PermutationIterator(getDigits(i));

			while(it.hasNext()) {
				BigInteger v = new BigInteger(it.next());
				if (v.isProbablePrime(10)) {
					System.out.println(v.toString());
				}
			}
		}
		
	}
	
	private static String getDigits(int n) {
		StringBuffer sb = new StringBuffer();
		for (int i=1; i <= n; i++) {
			sb.append(i);
		}
		return sb.toString();
	}
	
}
