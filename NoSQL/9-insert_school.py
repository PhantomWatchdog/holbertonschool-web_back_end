#!/usr/bin/env python3
""" 10-update_topics """

def update_topics(mongo_collection, name, topics):
    """Update the topics of a school document based on the name"""
    mongo_collection.update_one({"name": name}, {"$set": {"topics": topics}})
