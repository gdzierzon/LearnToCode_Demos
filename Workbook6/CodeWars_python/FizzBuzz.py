for i in range(0, 100):
    is0 = i == 0
    isDivisibleBy3 = i % 3 == 0
    isDivisibleBy5 = i % 5 == 0
    isDivisibleByBoth = isDivisibleBy3 and isDivisibleBy5

    if(is0):
        print(i)
    elif(isDivisibleByBoth):
        print('FizzBuzz')
    elif(isDivisibleBy3):
        print('Fizz')
    elif(isDivisibleBy5):
        print('Buzz')
    else:
        print(i)

