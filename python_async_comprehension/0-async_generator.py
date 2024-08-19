#!/usr/bin/env python3

import asyncio
import random
from typing import AsyncGenerator

""" Asynchronous generator"""

async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronous generator that yields random
    floating-point numbers between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
