
; these should really be local functions, but oh well

(let ((routes '()))
  (defun clear-routes ()
    (setf routes '()))
  (defun get-routes (pt)
    (assoc pt routes :test #'equal))
  (defun set-routes (pt n)
    (setf routes (cons (cons pt n) routes))))

(defun num-routes (pt)
  (cond ((and (= 20 (car pt)) (= 20 (cdr pt))) 1)
	((or (> (car pt) 20) (> (cdr pt) 20)) 0)
	((not (null (get-routes pt)))
	 (cdr (get-routes pt)))
	(t (let ((nr (+ (num-routes (cons (car pt) (1+ (cdr pt))))
			(num-routes (cons (1+ (car pt)) (cdr pt))))))
	     (set-routes pt nr)
	     nr))))