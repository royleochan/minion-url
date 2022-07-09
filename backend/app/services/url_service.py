from sqlalchemy.orm import Session

from ..models.url import Url
from ..schemas.url_schema import OriginalUrl
from ..utils.hash import get_hash_client


def get_url_by_shortened_url(db: Session, shortened_url: str) -> Url:
    return db.query(Url).filter(Url.shortened_url == shortened_url).first()


def create_url(db: Session, url_create: OriginalUrl) -> Url:
    hash_client = get_hash_client()
    new_url = Url(original_url=url_create.original_url)
    db.add(new_url)
    db.commit()
    key = hash_client.encode(new_url.id)
    new_url.shortened_url = key
    db.commit()

    return new_url
