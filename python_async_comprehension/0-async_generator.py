#!/usr/bin/env python3

from asyncio import sleep
import random
from typing import Generator

""" Asynchronous generator"""

async def async_generator() -> Generator[float, None, None]:
    """
    Asynchronous generator that yields random
    floating-point numbers between 0 and 10.
    """
    for i in range(10):
        await sleep(1)
        yield 10 * random.random()
