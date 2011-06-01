(ns rg.problem79
  (:import (java.io BufferedReader FileReader)))

(defn read-login-attempts []
  (with-open [rdr (BufferedReader. (FileReader. "keylog.txt"))]
      (sort (line-seq rdr))))


(def attempts-seq (seq (into #{} (read-login-attempts))))

(def used-chars (into #{} (map str (into #{} (mapcat #(seq %) attempts-seq)))))

;; (into #{} (map #(str (.charAt % 0)) (sort attempts-seq)))

;; for each entry in attempts
;;  for each digit in the entry
;;    if the digit = n, add all digits to the left to the result set

;; TODO: this won't work if n is found in s multiple times
(defn left-of [s n]
  "Return the substring of s up to, but not including the first occurence of n"
  (let [idx (.indexOf s n)]
    ;; idx could be equal to 0, but in that case we don't have anything left, so
    ;; we should still return nil
    (if (> idx 0)
      (.substring s 0 idx)
      nil)))

(defn all-left-of [attempts n]
  "Return every number that occurs before n in some element in the attempts sequence"
  (into #{} (map str (filter #(not (nil? %)) (mapcat #(left-of % n) attempts)))))

;; (all-left-of attempts-seq "9")

(def all-occurrences (map #(list % (seq (all-left-of attempts-seq (str %)))) (range 0 10)))

(def occurrence-map (reduce #(assoc %1 (str (first %2)) (last %2)) {} all-occurrences))

;; for every key in occurrence-map generate a potential login that has that number as the right-most digit
(defn generate-logins [m curpass]
  (let [first-n (str (.charAt curpass 0))]
    (if (m first-n)
      (mapcat #(generate-logins m %) (map #(str % curpass) (m first-n)))
      (list curpass))))

(def all-possible-logins (mapcat #(generate-logins occurrence-map (str %)) used-chars))

(println (count all-possible-logins))

(def deduped-logins (into #{} all-possible-logins))

(def filtered-logins (filter #(.containsAll (set (map str %)) used-chars) deduped-logins))

(println filtered-logins)
