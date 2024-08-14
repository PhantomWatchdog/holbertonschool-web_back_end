#!/usr/bin/env python3

"""
Type-annotated function element_length that takes a list
input_list of strings and returns a list of tuples, where each tuple
contains a string from the input list and its length.
"""

from typing import List, Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]
                   ) -> List[Tuple[Sequence, int]]:
    """Return list of tuples containing strings and their lengths"""
    return [(i, len(i)) for i in lst]
