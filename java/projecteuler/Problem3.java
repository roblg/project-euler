package projecteuler;

import java.util.List;
import java.util.ArrayList;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.Predicate;


public class Problem3 {
	
	public static void main(String[] args) {
		
		final long value = 600851475143L;
		
		List<Long> factors = new ArrayList<Long>();
		for (long l = 2; l * l <= value; l++) {
			
			if (value % l == 0) {
				factors.add(l);
				factors.add(value / l);
			}
		}
		
		CollectionUtils.filter(factors, new Predicate() {
			@Override
			public boolean evaluate(Object arg0) {
				Long factor = (Long)arg0;
				for (long l = 2; l * l <= factor; l++) {
					if (factor % l == 0) {
						return false;
					}
				}
				return true;
			}
		});
		
		System.out.println(factors.toString());
		
	}
	
}
