
mod fib;
mod primes;

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
    if let Some(v) = primes::prime_factors(600851475143).iter().cloned().max() {
        v
    } else {
        0
    }
}

fn main() {
    println!("{}", prob_3());
}
