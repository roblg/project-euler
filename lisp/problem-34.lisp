(let ((cache (make-hash-table)))
  (defun factorial (n)
    (cond ((= n 0) 1)
	  ((not (null (gethash n cache))) (gethash n cache))
	  (t (do ((i 1 (1+ i))
		  (product 1))
		 ((> i n) (setf (gethash n cache) product) product)
	       (setf product (* product i))))))
    (defun clear-factorial-cache ()
      (setf cache (make-hash-table)))
    (defun get-from-cache (n)
      (gethash n cache)))

(defun sum-of-factorials-of-digits (n)
  (let* ((n-string (format nil "~A" n))
	 (n-string-len (length n-string)))
    (do ((i 0 (1+ i))
	  (sum 0))
	 ((>= i n-string-len) sum)
      (setf sum (+ sum 
		   (factorial (- (char-code (char n-string i)) (char-code #\0))
))))))

(defun problem-34 ()
  (do ((i 3 (1+ i))
       (sum 0))
      ((>= i 1000000) sum)
    (let ((digit-factorial-sum (sum-of-factorials-of-digits i)))
      (if (= digit-factorial-sum i)
	  (progn
	    (format t "~A~%" i)
	    (setf sum (+ sum i)))))))