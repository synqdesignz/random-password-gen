import random


def random_pw():
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+"
    charlist = list(chars)
    password = ""

    random.shuffle(charlist)

    for char in charlist:
        if len(password) < 12:
            password = password + char

    return password


print(random_pw())
