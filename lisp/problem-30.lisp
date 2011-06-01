(defun sum-of-5th-powers-of-digits (n)
  (let* ((n-string (format nil "~A" n))
	 (n-string-len (length n-string)))
    (do ((i 0 (1+ i))
	  (sum 0))
	 ((>= i n-string-len) sum)
      (setf sum (+ sum 
		   (expt (- (char-code (char n-string i)) (char-code #\0))
			 5))))))

(defun problem-30 ()
  (do ((i 0 (1+ i))
       (sum 0))
      ((> i 1000000) sum)
    (let ((sum-of-digits (sum-of-5th-powers-of-digits i)))
      (if (= sum-of-digits i)
	  (progn
	    (format t "~A~%" i)
	    (setf sum (+ sum i)))))))