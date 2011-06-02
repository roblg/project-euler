
# Implements the Sieve of Eratosthenes (http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
# computing primes from 2 up to n
class Sieve
  
  def primes_upto(n)
    primes = []
    numbers = (2..n).to_a
    p = 0
    begin
      p = numbers.shift
      primes.push(p)
      temp_numbers = []
      numbers.each {
        |n|
        if n % p != 0 then
          temp_numbers.push(n)
        end
      }
      numbers.clear
      numbers = temp_numbers
    end while (p * p <= n)

    numbers.each { |x| primes.push(x) }
    
    return primes
  end
  
end