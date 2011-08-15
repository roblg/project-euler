object Problem2 {
  def main(args : Array[String]) : Unit = {
    
    var sum = 0
    var i = 1
    var j = 2
    
    while (j < 4000000) {
      if (j % 2 == 0) 
        sum += j 
      val t = j
      j = i + j
      i = t
    }
    
    println("Solution: " + sum)
    
  }
}
