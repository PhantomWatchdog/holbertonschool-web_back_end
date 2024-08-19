#!/usr/bin/env python3

import asyncio
from typing import List
import random

""" Asynchronous generator that yields random
floating-point numbers between 0 and 10.
"""


async def async_generator() -> List[float, None]:
    """
    Asynchronous generator that yields random floating-point numbers between 0 and 10.

    Returns:
        List[float, None]: A list of floating-point numbers or None.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
