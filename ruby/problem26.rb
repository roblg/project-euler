require 'bigdecimal'
require_relative 'sieve'

numbers = []
@sieve = Sieve.new()
@primes = @sieve.primes_upto(1000)

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

def remove_twos_and_fives(factors)
  return factors.reject { |x| x == 2 || x == 5}
end

def will_terminate(n)
  return remove_twos_and_fives(get_prime_factors(n)).empty?
end

def num_nines_to_divide(n)
  nines = "9"
  while (nines.to_i % n != 0)
    nines += "9"
  end
  return nines.length
end

best_d = 0
max_repeating = 0

for i in (1..1000) 
  if (!will_terminate(i))
    size_of_repeat = num_nines_to_divide(remove_twos_and_fives(get_prime_factors(i)).inject(1) { |x, y| x * y })
    
    if (size_of_repeat > max_repeating)
      best_d = i
      max_repeating = size_of_repeat
    end
  end
end

puts "d = " + best_d.to_s
puts "cycle = " + max_repeating.to_s

