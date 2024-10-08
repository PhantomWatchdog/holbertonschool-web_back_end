#!/usr/bin/env python3

"""
Import async_generator from the previous task
and then write a coroutine
"""

import typing
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> typing.List[float]:
    """ Coroutine that will collect 10 random numbers using an async
    comprehension over an async generator """
    return [i async for i in async_generator()]
