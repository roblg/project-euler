(defun problem-29 ()
  (let ((entries (make-hash-table)))
    (do ((a 2 (1+ a)))
	((> a 100))
      (do ((b 2 (1+ b)))
	  ((> b 100))
	(setf (gethash (expt a b) entries) t)))
    (hash-table-count entries)))