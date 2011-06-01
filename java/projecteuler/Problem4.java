package projecteuler;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;
import org.apache.commons.collections.comparators.ReverseComparator;

public class Problem4 {

	public static void main(String[] args) {
		
		List<Integer> palindromes = new ArrayList<Integer>();
		
		for (int j = 999; j >= 100; j--) {
			for (int i = j - 1; i >= 100; i--) {
				if (isPalindrome(i * j)) {
					// System.out.println("Palindrome: " + (i * j) + " {i=" + i + ",j=" + j + "}");
					palindromes.add(i * j);
				}
			}
		}
		
		Collections.sort(palindromes, (Comparator<Integer>)new ReverseComparator());
		System.out.println(palindromes.toString());
		
	}
	
	private static boolean isPalindrome(int i) {
		String intString = Integer.toString(i);
		return isPalindrome(intString);
	}

	private static boolean isPalindrome(String intString) {		
		int len = intString.length();
		int i, j;
		
		if (len % 2 == 0) {
			j = len  / 2;
			i = j - 1;
		} else {
			i = len / 2 - 1;
			j = len / 2 + 1;
		}
		
		while (i >= 0) {
			if (intString.charAt(i) != intString.charAt(j)) {
				return false;
			}
			i--;
			j++;
		}
		
		return true;
	}
	
}
