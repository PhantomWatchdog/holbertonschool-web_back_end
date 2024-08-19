#!/usr/bin/env python3

import asyncio
from time import time

"""
Import async_generator from the previous task
"""

async_comprehension = __import__('1-async_comprehension').async_comprehension

async def measure_runtime() -> float:
    """
    Measure the runtime of the async_comprehension function.
    """
    start_time = time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end_time = time()
    return end_time - start_time
