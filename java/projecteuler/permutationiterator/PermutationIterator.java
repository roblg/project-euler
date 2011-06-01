package projecteuler.permutationiterator;


import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.SortedSet;
import java.util.TreeSet;

public class PermutationIterator implements Iterator<String> {
	
	private String prev;
	
	private final int numPermutations;
	private int calls;

	public PermutationIterator(final String input) {
		if(input.length() < 1) {
			throw new IllegalArgumentException("String must be at least one character!");
		}
		char[] carr = input.toCharArray();
		SortedSet<Character> ss = new TreeSet<Character>();
		for(char c: carr) {
			ss.add(c);
		}
		Character[] charOut = ss.toArray(new Character[0]);
		prev = getStringFromCharacterArray(charOut);
		numPermutations = factorial(prev.length());
		calls = 0;
	}
	
	private static String getStringFromCharacterArray(Character[] carr) {
		StringBuffer sb = new StringBuffer();
		for(Character c: carr) {
			sb.append(c);
		}
		return sb.toString();
	}
	
	private static int factorial(int n) {
		int result = n;
		while(n-- > 1) {
			result *= n;
		}
		return result;
	}
	
	public boolean hasNext() {
		return calls < numPermutations;
	}

	public String next() {
		if(!hasNext()) {
			throw new NoSuchElementException();
		}
		
		if(calls++ == 0) {
			return prev;
		}
		
		int lastindex = 0;
		SortedSet<Character> ss = new TreeSet<Character>();

		Character last = Character.MIN_VALUE;
		for(int i = prev.length()-1; i >= 0; i--) {
			Character c = prev.charAt(i);
			if(c < last) {
				ss.add(c);
				lastindex = i;
				break;
			} else {
				if(last != Character.MIN_VALUE) {
					ss.add(last);
				}
				last = c;
			}
		}
		ss.add(last);
		
		StringBuffer result = new StringBuffer(prev.substring(0, lastindex));
		result.append(findNextValue(prev.charAt(lastindex), ss));
		while (!ss.isEmpty()) {
			result.append(ss.first());
			ss.remove(ss.first());
		}
		prev = result.toString();
		return prev;
	}

	private static Character findNextValue(Character c, SortedSet<Character> ss) {
		SortedSet<Character> tailSet = ss.tailSet(c);
		for(Iterator<Character> it = tailSet.iterator(); it.hasNext();) {
			Character t = it.next();
			if(t > c) {
				it.remove();
				return t;
			}
		}
		return null;
	}
	
	public void remove() {
		throw new UnsupportedOperationException();
	}
	
	public static void main(String[] args) {
		PermutationIterator it = new PermutationIterator("123456789");
		
		for (int i = 0; i < 10; i++) {
			System.out.println(it.next());
		}
		
	}

}
