#!/usr/bin/env python3

import asyncio
from typing import Any


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task[Any]:
    """
    Create a task that waits for a random amount of time.

    Args:
        max_delay (int): The maximum delay in seconds.

    Returns:
        asyncio.Task[Any]: A task that represents the asynchronous operation.
    """
    return asyncio.Task(wait_random(max_delay))
