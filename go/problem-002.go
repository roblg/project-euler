package main

import "fmt"

func nextFib(prev, cur int) (int, int) {
	return cur, cur + prev
}

func main() {
	sum := 0
	prev := 1
	cur := 1

	for cur <= 4000000 {
		if cur%2 == 0 {
			sum += cur
		}
		prev, cur = nextFib(prev, cur)
	}

	fmt.Println("Solution: ", sum)
}
