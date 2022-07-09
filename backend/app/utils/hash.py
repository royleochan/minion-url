from functools import lru_cache
from hashids import Hashids


from ..config.hash_config import HashConfig


@lru_cache
def get_hash_config():
    return HashConfig()


@lru_cache
def get_hash_client():
    salt = get_hash_config().salt
    return Hashids(min_length=4, salt=salt)
