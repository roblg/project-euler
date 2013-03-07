-module(fib).
-export([fib/1, fib_list/1]).
-import(lists).

% for the purposes of this module, 
% fib_list(5) = [1, 2, 3, 5, 8]

fib(N) -> fib_helper(N-1, 1, 2).

fib_helper(0, Result, _) -> Result;
fib_helper(N, I, J) -> fib_helper(N-1, J, I + J).

fib_list(N) -> lists:reverse(fib_list_helper(N, 1, 2, [])).

fib_list_helper(1, Result, _, Acc) -> [Result | Acc];
fib_list_helper(N, I, J, Acc) -> fib_list_helper(N - 1, J, I + J, [I | Acc]).
