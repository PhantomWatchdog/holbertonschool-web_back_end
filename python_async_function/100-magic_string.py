#!/usr/bin/env python3

def magic_string():
    if not hasattr(magic_string, 'i'):
        magic_string.i = 0
    magic_string.i += 1
    return ", ".join(["BestSchool"] * magic_string.i)
