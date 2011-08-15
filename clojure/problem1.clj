(ns rg.problem1)

(defn solve
	([] (solve 999 0))
	([n sum]
		(if (= n 1)
			sum
			(if (or (= 0 (mod n 3)) (= 0 (mod n 5)))
				(solve (- n 1) (+ sum n))
				(solve (- n 1) sum)))))

(println (solve))
