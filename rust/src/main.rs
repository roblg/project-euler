
#![allow(dead_code)]

use std::cmp;

mod fib;
mod primes;
mod strings;

fn prob_1 () -> i32 {
    let mut res = 0;
    for i in 1..1000 {
        if i % 3 == 0 || i % 5 == 0 {
            res += i;
        }
    }
    res
}

// even fibonacci numbers < 4m
fn prob_2 () -> u64 {
    const MAX : u64 = 4_000_000;

    let fib = fib::new_iter();
    fib.take_while(|x| x < &MAX)
        .filter(|x| x % 2 == 0)
        .sum()
}

fn prob_3 () -> u64 {
    if let Some(&v) = primes::prime_factors(600851475143).iter().max() {
        v
    } else {
        0
    }
}

fn prob_4 () -> u64 {
    let mut max = 0;
    for i in 100..1000 {
        for j in i..1000 {
            let product = i * j;
            if strings::is_palindrome(&product.to_string() ) {
                max = cmp::max(max, product);
            }
        }
    }
    max
}

fn prob_5 () -> u64 {
    let mut i : u64 = 20;

    let divisors = 3..21;

    loop {
        if divisors.clone().all(|d| i % d == 0) {
            return i;
        }
        i += 20;
    }

}

fn prob_6 () -> u64 {
    let sum_of_squares : u64 = (1..101).map(|x| x * x).sum();
    let sum : u64 = (1..101).sum();
    let square_of_sum = sum*sum;
    square_of_sum - sum_of_squares
}

fn prob_7 () -> u64 {
    primes::new_iter().take(10001).last().unwrap() as u64
}

fn main() {
    println!("{}", prob_7());
}
