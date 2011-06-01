package projecteuler;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import projecteuler.permutationiterator.PermutationIterator;

public class Problem32 {

	public static void main(String[] args) {
		
		PermutationIterator it = new PermutationIterator("123456789");

		List<BigInteger> products = new ArrayList<BigInteger>();
		
		while (it.hasNext()) {
			String permutation = it.next();
			
			for (int i = 1; i < 7; i++) {
				for (int j = i + 1; j < 8; j++) {
					// System.out.println(String.format("%d, %d, %d", i, j ,k));
					BigInteger p1 = new BigInteger(permutation.substring(0,i));
					BigInteger p2 = new BigInteger(permutation.substring(i,j));
					
					BigInteger product = p1.multiply(p2);
					BigInteger desiredProduct = new BigInteger(permutation.substring(j));
					
					if (product.equals(desiredProduct)) {
						System.out.println(String.format("%d * %d = %d", p1.longValue(), p2.longValue(), product.longValue()));
						products.add(product);
					}
				}
			}
		
		}
		
		Set<BigInteger> productSet = new HashSet<BigInteger>();
		productSet.addAll(products);
		System.out.println(products.size());
		System.out.println(productSet.size());
		
		BigInteger sum = new BigInteger("0");
		for (BigInteger i : productSet) {
			sum = sum.add(i);
		}
		
		System.out.println(sum);
		
	}
	
}
