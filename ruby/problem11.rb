#!/usr/bin/env ruby

file = File.new("input/problem11.txt")

grid = []

file.each_line {
  |line|
  grid.push(line.chop.split)
}

def get_row(grid, i, j)
  # print i.to_s + "," + j.to_s + "\n"
  return grid[i][j].to_i * grid[i][j+1].to_i * grid[i][j+2].to_i * grid[i][j+3].to_i
end

def get_col(grid, i, j)
  #print i.to_s + "," + j.to_s + "\n"
  return grid[i][j].to_i * grid[i+1][j].to_i * grid[i+2][j].to_i * grid[i+3][j].to_i
end

def get_diag_left(grid, i, j)
  if (j - 3) < 0 then
    return 0
  else
    return grid[i][j].to_i * grid[i+1][j-1].to_i * grid[i+2][j-2].to_i * grid[i+3][j-3].to_i
  end
end

def get_diag_right(grid, i, j)
  return grid[i][j].to_i * grid[i+1][j+1].to_i * grid[i+2][j+2].to_i * grid[i+3][j+3].to_i
end

n_cols = 20
n_rows = 20

values = []
max_val = 0

n_rows.times do 
  |i|
  n_cols.times do 
    |j|
    
    r_v = get_row(grid, i, j)
    if r_v >= max_val then
      max_val = r_v
      #print "Max: " + max_val.to_s + " @ [" + i.to_s + "," + j.to_s + "] r_v\n"
    end
    values.push(r_v)
    
    if i <= 16 then
      c_v = get_col(grid, i, j)
      if c_v >= max_val then
        max_val = c_v
        #print "Max: " + max_val.to_s + " @ [" + i.to_s + "," + j.to_s + "] c_v\n"      
      end
      values.push(c_v)
      
      d_l = get_diag_left(grid, i, j)
      if d_l >= max_val then 
        max_val = d_l
        #print "Max: " + max_val.to_s + " @ [" + i.to_s + "," + j.to_s + "] d_l\n"      
      end
      values.push(d_l)
      
      d_r = get_diag_right(grid, i, j)
      if d_r >= max_val then
        max_val = d_r
        #print "Max: " + max_val.to_s + " @ [" + i.to_s + "," + j.to_s + "] d_r\n"      
      end
      values.push(d_r)
    end
  end
end

print "Problem 11: " + max_val.to_s + "\n"