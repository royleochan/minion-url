from sqlalchemy.orm import Session

from ..models.url import Url
from ..schemas.url_schema import OriginalUrl


def get_original_url_by_shortened_url(db: Session, shortened_url: str):
    return db.query(Url).filter(Url.shortened_url == shortened_url).first()


def create_url(db: Session, url_create: OriginalUrl):
    new_url = Url(original_url=url_create.original_url, shortened_url="test")
    db.add(new_url)
    db.commit()
    db.refresh(new_url)

    return new_url
