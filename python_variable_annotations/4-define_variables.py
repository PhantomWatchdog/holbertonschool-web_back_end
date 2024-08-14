#!/usr/bin/env python3

""" This module contains the function for task 4 """

def define_variables() -> None:
    """ This function defines and annotates variables with specified values """
    a: int = 1
    pi: float = 3.14
    i_understand_annotations: bool = True
    school: str = "Holberton"
    print(f"{a} is a {type(a)}")
    print(f"{pi} is a {type(pi)}")
    print(f"{i_understand_annotations} is a {type(i_understand_annotations)}")
    print(f"{school} is a {type(school)}")
    return None
