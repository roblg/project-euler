object Problem1 {
  
  def main(args : Array[String]) : Unit = {
    var sum = 0
    
    for (i <- 1 until 1000 
      if i % 3 == 0 || i % 5 == 0
    ) sum += i
    
    println("Solution: " + sum)
  }
}
