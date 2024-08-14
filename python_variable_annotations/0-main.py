#!/usr/bin/env python3
"""
This script tests the functionality of the `add` function.

The `add` function takes two numbers as input and returns their sum.

Returns:
    The sum of the two input numbers.
"""

add = __import__('0-add').add

print(add(1.11, 2.22) == 1.11 + 2.22)
print(add.__annotations__)
