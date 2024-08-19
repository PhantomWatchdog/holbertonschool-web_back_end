#!/usr/bin/env python3

import asyncio
from typing import List
import random


async def async_generator() -> List[float, None]:
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
