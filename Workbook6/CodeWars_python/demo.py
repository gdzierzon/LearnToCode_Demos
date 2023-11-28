def sum_mul(n, m):
    if n is None or m is None:
        return 'INVALID'
    if n <= 0 or m <= 0:
        return 'INVALID'
    
    answer = 0
    i = n
    while i < m:
        answer += i
        i += n
    return answer


result = sum_mul(2, 9)
print(result)