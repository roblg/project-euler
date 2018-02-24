
pub struct Primes {
    primes: Vec<u32>,
    upto: u32,
    idx: usize,
}

impl Primes {
    fn new() -> Primes {
        Primes { primes: vec![2, 3, 5], idx: 0, upto: 5 }
    }
    fn find_more_primes(&mut self) {
        let target = self.upto*2+1;
        // // TODO: for performance, don't even look at evens
        let mut possible_primes : Vec<u32> = (self.upto..target)
            .filter(|&x| x % 2 == 1) // odds only
            .collect();

        // println!("{:?}", possible_primes);

        for p in &self.primes {

            // println!("p: {}", p);

            // TODO: is there a way to do this without collect()
            // at every iteration?
            possible_primes = possible_primes
                .into_iter()
                .filter(|&x| x % p != 0)
                .collect();

            //println!("pp: {:?}", possible_primes);
        }

        // println!("{:?}", possible_primes);

        loop {
            let p = possible_primes[0];
            if (p as f64) >= (target as f64).sqrt() {
                break;
            }
            self.primes.push(p);
            possible_primes = possible_primes[1..]
                .iter()
                .cloned()
                .filter(|&x| x % p != 0)
                .collect();
        }

        self.primes.extend(possible_primes);

        self.upto = target;
    }
}

impl Iterator for Primes {
    type Item = u32;
    fn next(&mut self) -> Option<Self::Item> {
        if self.idx == self.primes.len() - 1 {
            self.find_more_primes();
        }
        let res = self.primes[self.idx];
        self.idx += 1;
        Some(res)
    }
}

pub fn new_iter() -> Primes {
    Primes::new()
}

pub fn prime_factors(n : u64) -> Vec<u64> {
    let mut prime_factors = Vec::new();

    let mut n = n;
    let mut p = new_iter();

    loop {
        if let Some(val) = p.next() {
            let val = val as u64;
            while n > 1 && n % val == 0 {
                prime_factors.push(val);
                n = n / val;
            }
            if n <= 1 { break ; }
        }
    }

    prime_factors
}
