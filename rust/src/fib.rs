
pub struct Fib {
    i: u64,
    j: u64,
}

impl Fib {
    fn new() -> Fib {
        Fib { i: 0, j: 1 }
    }
}
impl Iterator for Fib {
    type Item = u64;
    fn next(&mut self) -> Option<Self::Item> {
        let ret = self.j;
        self.j = self.i + self.j;
        self.i = ret;
        Some(ret)
    }
}

pub fn new_iter() -> Fib {
    Fib::new()
}
