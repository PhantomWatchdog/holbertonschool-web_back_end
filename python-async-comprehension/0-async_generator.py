#!/usr/bin/env python3

import asyncio
import random

""" Asynchronous generator that yields random
floating-point numbers between 0 and 10.
"""


async def async_generator() -> int:
    """
    Asynchronous generator that yields random
    floating-point numbers between 0 and 10.
    """
    for _ in range(10):
        yield random.uniform(0, 10)
        await asyncio.sleep(1)
