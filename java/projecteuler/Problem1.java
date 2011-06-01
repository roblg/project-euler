package projecteuler;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.Predicate;

public class Problem1 {

	public static void main(String[] args) {
		
		List<Integer> naturalNums = new ArrayList<Integer>();
		for (int i = 1; i <= 1000; i++) {
			naturalNums.add(i);
		}
		
		CollectionUtils.filter(naturalNums, new Predicate() {

			@Override
			public boolean evaluate(Object arg0) {
				Integer i = (Integer)arg0;
				return i % 3 == 0 || i % 5 == 0;
			}
		});
		
		System.out.println(naturalNums.toString());
		
		int sum = 0;
		for (Integer i : naturalNums) {
			sum += i;
		}
		
		System.out.println("Answer: " + sum);
		
	}

}
