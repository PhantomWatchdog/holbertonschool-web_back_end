#!/usr/bin/env python3

from typing import Tuple

"""Simple helper function"""


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return a tuple of size two containing a start index
    and an end index
    """
    return ((page - 1) * page_size, page * page_size)
