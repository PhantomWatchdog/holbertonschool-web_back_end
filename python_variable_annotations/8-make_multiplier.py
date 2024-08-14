#!/usr/bin/env python3

"""Make a multiplier"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by multiplier"""
    def multiply(num: float) -> float:
        """Return product of multiplier and num"""
        return num * multiplier
    return multiply
