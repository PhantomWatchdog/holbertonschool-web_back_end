#!/usr/bin/env python3

"""
Import async_generator from the previous task
"""
import asyncio
import typing
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> typing.List[float]:
    """
    Measure the runtime of the async_comprehension function.
    """
    start_time = time.time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end_time = time.time()
    return end_time - start_time
