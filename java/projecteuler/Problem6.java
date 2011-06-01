package projecteuler;

public class Problem6 {
	public static void main(String[] args) {
		
		long sumOfSquares = 0;
		long sum = 0;
		
		for (long i = 1; i <= 100; i++) {
			sumOfSquares += (i * i);
			sum += i;
		}
		
		long squareOfSum = sum * sum;
	
		System.out.println("Answer: " + (squareOfSum - sumOfSquares));
		
		
	}
}
