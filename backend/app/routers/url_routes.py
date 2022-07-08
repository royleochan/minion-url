
from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session

from ..database.database import get_db
from ..schemas.url_schema import Url, OriginalUrl
from ..services import url_service


router = APIRouter(
    prefix="/url",
    tags=['Urls']
)


@router.get("/{shortened_url}", response_model=OriginalUrl)
def get_original_url_by_shortened_url(shortened_url: str, db: Session = Depends(get_db)):
    original_url = url_service.get_original_url_by_shortened_url(
        db, shortened_url=shortened_url)

    return original_url


@router.post("/",  response_model=Url)
def create_url(original_url: OriginalUrl, db: Session = Depends(get_db)):
    new_url = url_service.create_url(db=db, url_create=original_url)

    return new_url
