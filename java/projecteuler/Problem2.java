package projecteuler;

import java.util.Iterator;

public class Problem2 {

	private static final class FibIterator implements Iterator<Integer> {

		private int i = 1;
		private int j = 1;
		
		@Override
		public boolean hasNext() {
			return true;
		}

		@Override
		public Integer next() {
			int result = j;
			j = i + j;
			i = result;
			return result;
		}

		@Override
		public void remove() {
			throw new UnsupportedOperationException();
		}
		
	}
	
	public static void main(String[] args) {
		FibIterator fibIt = new FibIterator();
		
		int sum = 0;
		int fib = 0; 
		while (true) {
			fib = fibIt.next();
			if (fib > 4000000) {
				break;
			}
			if (fib % 2 == 0) {
				sum += fib;
			}
		}
		
		System.out.println("Answer: " + sum);
		
	}

}
