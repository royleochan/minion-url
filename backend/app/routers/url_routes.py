
from fastapi import Depends, APIRouter, HTTPException
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session

from ..database.database import get_db
from ..schemas.url_schema import Url, OriginalUrl
from ..services import url_service


router = APIRouter(
    prefix="/url",
    tags=['Urls']
)


@router.get("/{shortened_url}")
def forward_to_url(shortened_url: str, db: Session = Depends(get_db)):
    url = url_service.get_url_by_shortened_url(
        db, shortened_url=shortened_url)

    if url:
        return RedirectResponse(url.original_url)
    else:
        message = f"URL '{shortened_url}' does not exist"
        raise HTTPException(status_code=404, detail=message)


@router.post("/",  response_model=Url)
def create_url(original_url: OriginalUrl, db: Session = Depends(get_db)):
    new_url = url_service.create_url(db=db, url_create=original_url)

    return new_url
