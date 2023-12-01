
def real_numbers(n):
    numbersDivisibleBy2 = n // 2
    numbersDivisibleBy3 = n // 3
    numbersDivisibleBy5 = n // 5

    numbersDivisibleBy6 = n // 6
    numbersDivisibleBy10 = n // 10
    numbersDivisibleBy15 = n // 15

    numbersDivisibleBy30 = n // 30

    return n - numbersDivisibleBy2 - numbersDivisibleBy3 - numbersDivisibleBy5 + numbersDivisibleBy6 + numbersDivisibleBy10 + numbersDivisibleBy15 - numbersDivisibleBy30


print('15: ',  real_numbers(15))
print('30: ',  real_numbers(30))


# 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
# 1 7 11 13
