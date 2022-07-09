
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session

from .models import url
from .database.database import engine, get_db
from .routers import url_routes
from .services import url_service


url.Base.metadata.create_all(bind=engine)


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(url_routes.router)


@app.get("/", tags=["Root"])
async def read_root() -> dict:
    return {"message": "Welcome to MinionUrl."}


@app.get("/{shortened_url}", tags=["Root"])
def forward_to_url(shortened_url: str, db: Session = Depends(get_db)):
    url = url_service.get_url_by_shortened_url(
        db, shortened_url=shortened_url)

    if url:
        return RedirectResponse(url.original_url)
    else:
        message = f"URL '{shortened_url}' does not exist"
        raise HTTPException(status_code=404, detail=message)
