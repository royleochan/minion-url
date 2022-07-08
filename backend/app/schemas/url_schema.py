from datetime import datetime
from .common import ApiBase
from datetime import datetime


class Url(ApiBase):
    id: int
    original_url: str
    shortened_url: str
    created_at: datetime


class OriginalUrl(ApiBase):
    original_url: str
