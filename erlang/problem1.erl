-module(problem1).
-export([solve/0]).
-import(lists).

solve() -> 
	lists:foldl(
		fun (X, Sum) -> X + Sum end, 0, 
		[ X || X <- lists:seq(1,999), (X rem 3 == 0) or (X rem 5 == 0) ]).
