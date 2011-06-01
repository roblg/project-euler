
require_relative 'sieve'

class PrimeFactors
  
  def initialize(upto=1000)
    @sieve = Sieve.new()
    @primes = @sieve.primes_upto(upto)
  end

  def get_prime_factors(n)
    prime_idx = 0
    factors = []
    while n != 1
      if n % @primes[prime_idx] == 0
        factors.push(@primes[prime_idx])
        n /= @primes[prime_idx]
      else
        prime_idx += 1
      end
    end
    return factors
  end
  
  def get_num_unique_factors(n)
    factors = self.get_prime_factors(n)
    factors_map = factors.inject({}) do
      |acc, x|
      if acc.include?(x) then
        acc[x] = acc[x] + 1
      else 
        acc[x] = 1
      end
      acc
    end
    return factors_map.size
  end
  
end
